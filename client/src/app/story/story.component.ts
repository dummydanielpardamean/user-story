import {Component, OnInit} from "@angular/core";
import {StoryService} from "../story.service";
import {AuthenticationService} from "../authentication.service";
import {routerTransition} from "../animations/routerTransition";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class StoryComponent implements OnInit {

  public stories: any;

  constructor(private service: StoryService, private as: AuthenticationService) {
  }

  ngOnInit() {
    this.service.getStory().subscribe(res => {
      this.stories = res;
      console.log(this.stories);
    });
  }

  onStoryAdded(event: any) {
    this.stories.push(event[0]);
  }

  logout() {
    this.as.logout();
  }
}
