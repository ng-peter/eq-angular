import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { appRoutes } from "./routes";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { TestappComponent } from "./test/testapp/testapp.component";
import { CourseListComponent } from "./course/course-list/course-list.component";
import { CourseItemComponent } from "./course/course-item/course-item.component";
import { CourseService } from "./shared/course-service.service";
import { DataService } from "./shared/data-service.service";
import { ToastrService } from "./shared/toastr.service";
import { FcalService } from "./shared/fcal.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseResolverService } from "./shared/course-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TestappComponent,
    CourseListComponent,
    CourseItemComponent,
    NavbarComponent,
    CourseDetailComponent,
    NotFoundComponent,
    AddCourseComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    CourseService,
    DataService,
    ToastrService,
    FcalService,
    CourseResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
