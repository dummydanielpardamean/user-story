import { Component, OnInit } from "@angular/core";
import { StoryService } from "../story.service";
import { AuthenticationService } from "../authentication.service";
import { TokenService } from "../token.service";
import { routerTransition } from "../animations/routerTransition";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class StoryComponent implements OnInit {

  public stories: any;
  public user: any;

  constructor(private service: StoryService, private as: AuthenticationService, private token: TokenService) {
  }

  ngOnInit() {
    let token = localStorage.getItem("token");
    this.token.decode(token).subscribe(res => {
      // localStorage.setItem('user', JSON.stringify(res));
      this.user = res;

    });
    this.service.getStory().subscribe(res => {
      this.stories = res;
      console.log(this.stories);
    });


  }

  onStoryAdded(event: any) {
    console.log(event);
    this.stories.unshift(event);
    console.log("emit berhasil dilakukan");
    console.log(this.stories)
  }

  logout() {
    this.as.logout();
  }
}
