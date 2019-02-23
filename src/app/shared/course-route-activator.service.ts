import { Injectable } from "@angular/core";
import { CourseService } from "./course-service.service";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CourseRouteActivatorService implements CanActivate {
  constructor(private courseService: CourseService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const courseExists = !!this.courseService.getCourse(+route.params["id"]);

    if (!courseExists) {
      this.router.navigate(["/404"]);
    }
    return courseExists;
  }
}
