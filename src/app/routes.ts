import { Routes } from "@angular/router";
import { CourseComponent } from "./course/course.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CourseRouteActivatorService } from "./shared/course-route-activator.service";
import { AddCourseComponent } from "./add-course/add-course.component";

export const appRoutes: Routes = [
  { path: "courses", component: CourseComponent },
  { path: "courses/add", component: AddCourseComponent },
  {
    path: "courses/:id",
    component: CourseDetailComponent,
    canActivate: [CourseRouteActivatorService]
  },
  { path: "404", component: NotFoundComponent },
  { path: "", redirectTo: "courses", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];
