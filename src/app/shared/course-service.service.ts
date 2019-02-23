import { Injectable } from "@angular/core";
import { DataService } from "./data-service.service";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  courses;
  constructor(private dataService: DataService) {
    this.courses = dataService.getData();
  }

  getCourses() {
    return this.courses;
  }

  getCourse(id: number) {
    return this.courses.find(course => course.id === id);
  }
}
