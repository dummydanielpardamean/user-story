import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class TokenService {

  constructor(public http: Http) { }

  decode(token){
    return this.http.get('/api/token/decode?token=' + token)
      .map(res => res.json());
  }
}
