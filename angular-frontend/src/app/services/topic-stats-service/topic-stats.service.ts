import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopicStatsService {
  topicsSlugs: string[] = [];
  topicsDictionnary: any = {};
  topicsCounterDictionnary: { [slug: string]: number } = {};
  topicsProportions: { [slug: string]: string } = {};
  numberOfProducts = 0;

  public updateTopicsData(numberOfProducts : number) : void {
    this.numberOfProducts = numberOfProducts;
    this.fillTopicsCounterDictionnary();
    this.calculateProportions();
  }
  
  private fillTopicsCounterDictionnary() : void {
    this.topicsDictionnary.forEach((product: any[]) => {
      product.forEach(topic => {
        this.updateTopicsCounterDictionnary(topic);
      });
    });
  }

  private updateTopicsCounterDictionnary(topic: any) {
    if (!(topic['slug'] in this.topicsCounterDictionnary)) {
      this.topicsCounterDictionnary[topic['slug']] = 1;
      this.topicsSlugs.push(topic['slug']);
    } else {
      this.topicsCounterDictionnary[topic['slug']]++;
    }
  }

  private calculateProportions() : void{
    this.topicsSlugs.forEach((topicSlug: string) => {
      this.topicsProportions[topicSlug] = this.calculateProportion(topicSlug);
    });
  }

  private calculateProportion(slug: string) : string {
    const count = this.topicsCounterDictionnary[slug];
    return ((count / this.numberOfProducts) * 100).toFixed(0) + '%';
  }
  public reinitializeTopicsCounterDictionnary(): void {
    this.topicsCounterDictionnary = {};
  }
}