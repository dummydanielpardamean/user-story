import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoryComponent } from "./story/story.component";
import { AuthenticationGuardService } from "./authentication-guard.service";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {path: '', component: StoryComponent, canActivate: [AuthenticationGuardService]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
