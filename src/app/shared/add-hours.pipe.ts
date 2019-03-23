import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addHours"
})
export class AddHoursPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return "TBD";
    if (value >= 2) return value + " hours";
    return value + " hour";
  }
}
