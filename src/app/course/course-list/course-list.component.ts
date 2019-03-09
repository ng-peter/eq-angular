import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../shared/course-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: any;

  constructor(
    private courseServce: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* this.courses = this.courseServce.getCourses().subscribe(courses => {
      this.courses = courses;
    }); */
    this.courses = this.route.snapshot.data["courses"];
  }

  parentHandler(name) {
    console.log("I recieved data from :" + name);
  }

  name = "angular";
  size = 6;
  instructor = "peter";
  hours = 3;

  course1 = {
    name: "angular",
    size: 3,
    instructor: "peter",
    hours: 3,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  };

  /* courses = [
    {
      name: "angular lvl 1",
      size: 6,
      instructor: "peter",
      hours: 3,
      movie: {
        "favorite movie": "Shawshank Redemption",
        image: "https://via.placeholder.com/100"
      }
    },
    {
      name: "angular lvl 2",
      size: 12,
      hours: 3
    },
    {
      name: "angular lvl 3",
      size: 12,
      instructor: "peter",
      movie: {
        "favorite movie": "Shawshank Redemption",
        image: "https://via.placeholder.com/100"
      }
    },
    {
      name: "angular lvl 4",
      instructor: "peter",
      movie: {
        "favorite movie": "Shawshank Redemption",
        image: "https://via.placeholder.com/100"
      }
    }
  ]; */

  hideOrNot() {
    return true;
  }
}
