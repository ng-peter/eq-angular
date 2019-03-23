import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "showMinutes"
})
export class ShowMinutesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return "TBD";
    return value * 60 + " minutes";
  }
}
