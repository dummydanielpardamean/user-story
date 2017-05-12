import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StoryService {
  constructor(public http: Http) {
  }

  getStory() {
    let token = localStorage.getItem('token');
    let headers = new Headers({'x-access-token': token});
    return this.http.get('/api/stories', new RequestOptions({headers}))
      .map(res => res.json());
  }

  postStory(story: any) {
    let token = localStorage.getItem('token');
    return this.http.post('/api/story?token=' + token, {story})
      .map(res => res.json());
  }
}
