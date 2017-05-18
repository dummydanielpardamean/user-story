import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RegisterService {

  constructor(public http: Http) {
  }

  register(user) {
    return this.http.post('/api/signup', user)
      .map(response => response.json());
  }
}
