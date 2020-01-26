import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  static readonly dateFormatShort: "dd/MMM/yy";
  transform(value: any, args?: any): any {
    return super.transform(value, DateFormatPipe.dateFormatShort);
  }
}