import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface DatePickerParameters {
  postedAfter : string,
  postedBefore : string, 
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  datePicked: Date = new Date();
  todaysDate : Date = new Date();
  @Output()
  dateIsPicked = new EventEmitter<any>();

  protected getDatePicked(dateEvent: MatDatepickerInputEvent<Date>): void {
    if(dateEvent.value !== null){
      this.datePicked = dateEvent.value;
      const postedData : DatePickerParameters = this.convertPickedDateToPostedDate();
      this.dateIsPicked.emit(postedData);
    }else{
      throw new Error("dateEvent null");
    }
  }
  
  private convertPickedDateToPostedDate() {
    const nextDayPicked: Date = this.addXDaysToDate(this.datePicked, 1);
    const postedAfter: string = this.formatDateToYYYYMMDDString(nextDayPicked);

    const nex2tDaysPicked: Date = this.addXDaysToDate(this.datePicked, 2);
    const postedBefore: string = this.formatDateToYYYYMMDDString(nex2tDaysPicked);
    return { postedBefore, postedAfter };
  }

  
  private addXDaysToDate(date: Date, numberOfDaysToRemove = 1): Date{
    const dateAfterXDays : Date = new Date(date);
    dateAfterXDays.setDate(date.getDate()+numberOfDaysToRemove);
    return dateAfterXDays;
  }


  private formatDateToYYYYMMDDString(date : Date): string {
    return date.toISOString().split('T')[0];
  }

}
