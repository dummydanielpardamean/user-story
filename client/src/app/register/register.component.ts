import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../animations/routerTransition";
import { RegisterService } from "../register.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class RegisterComponent implements OnInit {
  public user = new User();

  constructor(private rs: RegisterService, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.rs.register(this.user)
      .subscribe(data => {
        this.router.navigate(['/login'])
      })
  }

}

class User {
  name: string;
  username: string;
  password: string;
}
