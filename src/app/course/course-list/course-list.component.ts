import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../shared/course-service.service";
import { ActivatedRoute } from "../../../../node_modules/@angular/router";

@Component({
  selector: "course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses;

  visibleCourses = [];
  filterBy = "all";
  sortBy = "name";

  filterCourses(filter) {
    this.filterBy = filter;
    if (filter === "all") {
      this.visibleCourses = this.courses.slice(0);
    } else {
      this.visibleCourses = this.courses.filter(course => {
        /* if (filter === "beginner") {
          return course.level === "beginner";
        } else if (filter === "intermediate") {
          return course.level === "intermediate";
        } else if (filter === "advanced") {
          return course.level === "advanced";
        } else if (filter === "expert") {
          return course.level === "expert";
        } */
        return course.level === filter;
      });
    }
  }

  sortCourses(filter) {
    this.sortBy = filter;
    if (filter === "name") {
      this.visibleCourses.sort(this.sortByName);
    } else {
      this.visibleCourses.sort(this.sortByID);
    }
  }

  sortByName(c1, c2) {
    if (c1.name.toLowerCase() > c2.name.toLowerCase()) return 1;
    else if (c1.name.toLowerCase() === c2.name.toLowerCase()) return 0;
    else return -1;
  }

  sortByID(c1, c2) {
    if (c1.id > c2.id) return 1;
    else if (c1.id === c2.id) return 0;
    else return -1;
  }

  constructor(
    private courseServce: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* this.courses = this.courseServce.getCourses().subscribe(courses => {
      this.courses = courses;
    }); */
    this.courses = this.route.snapshot.data["courses"];
    this.filterCourses("all");
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
