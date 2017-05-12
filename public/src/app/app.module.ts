import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationModule} from "@angular/platform-browser/animations"

import {routing} from "./app.routing";

import {AppComponent} from "./app.component";
import {StoryComponent} from "./story/story.component";
import {AuthGuard} from "./services/AuthGuard";
import {AuthenticationService} from "./services/AuthenticationService";
import {StoryService} from "./services/StoryService";
import {LoginComponent} from "./login/login.component";
import {AddStoryComponent} from "./add-story/add-story.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing, BrowserAnimationModule],
    providers: [AuthGuard, AuthenticationService, StoryService],
    declarations: [AppComponent, StoryComponent, LoginComponent, AddStoryComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
