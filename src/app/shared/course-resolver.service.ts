import { Injectable } from "@angular/core";
import { CourseService } from "./course-service.service";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CourseResolverService implements Resolve<any> {
  constructor(private courseService: CourseService) {}

  resolve() {
    return this.courseService.getCourses().pipe(map(courses => courses));
  }
}
