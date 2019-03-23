import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn
} from "@angular/forms";
import { S_IFREG } from "constants";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
      .error input {
        background-color: red;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["user/login"]);
    }
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [
      Validators.required,
      this.restrictedWords(["james", "bob", "guy"])
    ]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.router.navigate(["courses"]);
    }
  }

  cancel() {
    this.router.navigate(["courses"]);
  }

  validateFirstName() {
    return this.firstName.valid;
  }

  validateLastName() {
    return this.lastName.valid;
  }

  restrictedWords(words): ValidatorFn {
    return (control: FormControl): { [key: string]: any } => {
      if (!words) return null;
      var invalidWords = words
        .map(word => (control.value.includes(word) ? word : null))
        .filter(word => word != null);
      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(",") }
        : null;
    };
  }
}
