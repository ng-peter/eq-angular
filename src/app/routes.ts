import { Routes } from "@angular/router";
import { CourseComponent } from "./course/course.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CourseRouteActivatorService } from "./shared/course-route-activator.service";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseResolverService } from "./shared/course-resolver.service";
import { UserModule } from "./user/user.module";

export const appRoutes: Routes = [
  {
    path: "courses",
    component: CourseComponent,
    resolve: {
      courses: CourseResolverService
    }
  },
  { path: "courses/add", component: AddCourseComponent },
  {
    path: "courses/:id",
    component: CourseDetailComponent,
    canActivate: [CourseRouteActivatorService]
  },
  { path: "404", component: NotFoundComponent },
  { path: "", redirectTo: "courses", pathMatch: "full" },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule"
  },
  { path: "**", component: NotFoundComponent }
];
