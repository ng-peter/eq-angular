import { Injectable } from "@angular/core";
import { DataService } from "./data-service.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  courses;
  constructor(private dataService: DataService) {
    this.courses = dataService.getData();
  }

  getCourses() {
    let subject = new Subject();
    setTimeout(() => {
      subject.next(this.courses);
      subject.complete();
    }, 2000);
    return subject;
  }

  getCourse(id: number) {
    return this.courses.find(course => course.id === id);
  }
}
