import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class StoryService {
  constructor(public http: Http) {
  }

  getStory() {
    let token = localStorage.getItem('token');
    let headers = new Headers({'x-access-token': token});
    return this.http.get('api/stories', new RequestOptions({headers}))
      .map(res => res.json());
  }

  postStory(story: any) {
    let token = localStorage.getItem('token');
    let headers = new Headers({'x-access-token': token});
    let options = new RequestOptions({headers});
    return this.http.post('/api/story', {story}, options)
      .map(res => res.json());
  }

  updateStory(story:any){
    let token = localStorage.getItem('token');
    let headers = new Headers({'x-access-token': token});
    let options = new RequestOptions({headers});
    return this.http.put('/api/story/update', story, options)
      .map(res => res.json());
  }

  deleteStory(story:any){
    let token = localStorage.getItem('token');
    let headers = new Headers({'x-access-token': token});
    let options = new RequestOptions({headers});
    return this.http.delete('/api/story/update/' + story._id, options)
      .map(res => res.json());
  }
}
