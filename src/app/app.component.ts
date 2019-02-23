import { Component, OnInit } from "@angular/core";
import { FcalService } from "./shared/fcal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  calendar;
  constructor(private fcal: FcalService) {}

  ngOnInit() {
    this.calendar = this.fcal.fullCalendar("mainCal");
  }

  title = "app";
  name = "peter";
}
