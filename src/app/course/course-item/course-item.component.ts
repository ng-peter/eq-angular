import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
  AfterContentChecked
} from "@angular/core";
import { ToastrService } from "../../shared/toastr.service";
import { FcalService } from "../../shared/fcal.service";

@Component({
  selector: "course-item",
  templateUrl: "./course-item.component.html",
  styleUrls: ["./course-item.component.css"]
})
export class CourseItemComponent implements AfterContentChecked {
  @Input() course1;
  @Output() courseName = new EventEmitter();

  calendar;

  constructor(private toastr: ToastrService, private fcal: FcalService) {}

  ngAfterContentChecked() {
    this.calendar = this.fcal.fullCalendar("course" + this.course1.id);
  }

  fontSizeSet() {
    return "20px";
  }

  handleClick() {
    console.log("button was clicked!");
    this.courseName.emit(this.course1.name);
    this.toastr.success(this.course1.name);
    this.toastr.info(this.course1.name, "title");
    this.toastr.warning(this.course1.name, "title");
    this.toastr.error(this.course1.name, "title");
  }
}
