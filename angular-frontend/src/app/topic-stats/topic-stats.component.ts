import { Component, OnInit } from '@angular/core';
import { TopicStatsService } from '../services/topic-stats-service/topic-stats.service';

@Component({
  selector: 'app-topic-stats',
  templateUrl: './topic-stats.component.html',
  styleUrls: ['./topic-stats.component.css']
})
export class TopicStatsComponent implements OnInit  {
  //Variables used to store the topics and calculate proportions
  topicsSlugs: string[] = [];
  topicsDictionnary : any =  {};
  topicsCounterDictionnary : { [slug: string]: number } = {};
  topicsProportions: { [slug: string]: string } = {};

  constructor(private statsService: TopicStatsService) {}

  ngOnInit(){
    this.topicsSlugs = this.statsService.topicsSlugs;
    this.topicsDictionnary = this.statsService.topicsDictionnary;
    this.topicsCounterDictionnary = this.statsService.topicsCounterDictionnary;
    this.topicsProportions = this.statsService.topicsProportions;
  }

}
