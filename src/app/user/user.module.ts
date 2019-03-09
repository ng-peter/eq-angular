import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "profile", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ProfileComponent, LoginComponent]
})
export class UserModule {}
