import {Component} from "@angular/core";
import {AuthenticationService} from "../services/AuthenticationService";
import {Router} from "@angular/router";
import {User} from "../model/User";
import { componentTransition } from "./../animations/componentTransition";


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    animations: [componentTransition()],
    host: {'[@componentTransition]':''}
})

export class LoginComponent {
    public user = new User();

    constructor(private as: AuthenticationService, private router: Router) {
        this.user.username = 'danielpardamean';
        this.user.password = 'login';
    }

    login() {
        this.as.login(this.user.username, this.user.password).subscribe(data => {
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
        });
    }
}
