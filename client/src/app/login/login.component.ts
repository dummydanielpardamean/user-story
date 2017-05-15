import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { routerTransition } from "../animations/routerTransition";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {
  public user = new User();

  private socket;

  constructor(private as: AuthenticationService, private router: Router) {
    this.user.username = 'danielpardamean';
    this.user.password = 'login';
  }

  ngOnInit() {
  }

  login() {
    this.as.login(this.user.username, this.user.password).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

}

class User {
  username: string;
  password: string;
}

