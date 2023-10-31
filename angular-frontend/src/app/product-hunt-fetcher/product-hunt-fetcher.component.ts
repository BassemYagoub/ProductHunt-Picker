import { Component } from '@angular/core';
import { ProductHuntFetcherService } from '../services/product-hunt-fetcher-service/product-hunt-fetcher.service';
import { DatePickerParameters } from '../date-picker/date-picker.component';
import { TopicStatsService } from '../services/topic-stats-service/topic-stats.service';


@Component({
  selector: 'app-product-hunt-fetcher',
  templateUrl: './product-hunt-fetcher.component.html',
  styleUrls: ['./product-hunt-fetcher.component.css']
})
export class ProductHuntFetcherComponent {
  products: any[] = [];
  pageInfo: any;

  //Query parameters (others can/are be added in functions)
  queryParameters: any = {
    'first' : 15,  // Number of items per page
    'after' : '',  // Cursor for next page pagination
  }

  constructor(private productService: ProductHuntFetcherService, private statsService: TopicStatsService) {}
  

  private reinitializeVariablesAfterPickingNewDate(postedBefore: string) {
    const isNewDateSameAsOld: boolean = this.queryParameters['postedBefore'] == postedBefore;
    if (!isNewDateSameAsOld) {
      this.products = [];
      this.queryParameters['after'] = '';
      this.statsService.topicsDictionnary =  {};
      this.statsService.topicsSlugs = []
      this.statsService.topicsCounterDictionnary  = {};
    }
  }

  public updateProducts(parameters : DatePickerParameters){
    this.reinitializeVariablesAfterPickingNewDate(parameters.postedBefore);
    this.updateQueryParameters(parameters);
    this.fetchData();
  }

  private updateQueryParameters(parameters : DatePickerParameters): void{
    this.queryParameters["postedAfter"] = parameters.postedAfter;
    this.queryParameters["postedBefore"] = parameters.postedBefore;

  }

  private fetchData() {
    this.productService
      .getProductHuntData(this.queryParameters)
      .subscribe((data: any) => {
        this.manageFetchedData(data);
      });
  }

  private manageFetchedData(data: any) {
    this.products = this.products.concat(data.posts.nodes);
    this.pageInfo = data.posts.pageInfo;
    this.statsService.topicsDictionnary = this.products.map(
      (product => { return product.topics['nodes']; })
    );
    this.statsService.updateTopicsData(this.products.length);
  }

  protected fetchNextPage(): void {
    if (this.pageInfo && this.pageInfo.hasNextPage) {
      this.queryParameters['after'] = this.pageInfo.endCursor;
      this.statsService.reinitializeTopicsCounterDictionnary();
      this.fetchData();
    }
  }
 
  public isAnyProductAvailable(){
      return this.products.length != 0;
  }
  public isPageInfoNotNull(){
      return this.pageInfo != null;
  }

}
