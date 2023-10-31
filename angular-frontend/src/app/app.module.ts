import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {ProductHuntFetcherComponent} from './product-hunt-fetcher/product-hunt-fetcher.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductHuntFetcherService} from './services/product-hunt-fetcher-service/product-hunt-fetcher.service';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {ProductComponent} from './product/product.component';
import {TopicStatsComponent} from './topic-stats/topic-stats.component';
import {TopicStatsService} from './services/topic-stats-service/topic-stats.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductHuntFetcherComponent,
    DatePickerComponent,
    ProductComponent,
    TopicStatsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [ProductHuntFetcherService, TopicStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
