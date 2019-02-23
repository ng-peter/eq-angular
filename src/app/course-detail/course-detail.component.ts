import { Component, OnInit } from "@angular/core";
import { CourseService } from "../shared/course-service.service";
import { ActivatedRoute } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  course1;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.course1 = this.courseService.getCourse(
      +this.route.snapshot.params["id"]
    );
  }

  fontSizeSet() {
    return "20px";
  }

  handleClick() {
    console.log("button was clicked!");
  }
}
