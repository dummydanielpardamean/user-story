import {RouterModule, Routes} from "@angular/router";
import {StoryComponent} from "./story/story.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/AuthGuard";

const AppRoutes: Routes = [
    {path: '', component: StoryComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(AppRoutes);
