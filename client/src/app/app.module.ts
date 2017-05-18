import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AddStoryComponent } from "./add-story/add-story.component";
import { StoryComponent } from "./story/story.component";
import { AuthenticationGuardService } from "./authentication-guard.service";
import { AuthenticationService } from "./authentication.service";
import { StoryService } from "./story.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TokenService } from "./token.service";
import { RegisterComponent } from "./register/register.component";
import { RegisterService } from "./register.service";
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddStoryComponent,
    StoryComponent,
    RegisterComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationGuardService, AuthenticationService, StoryService, TokenService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
