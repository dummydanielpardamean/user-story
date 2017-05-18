import { Component, OnInit } from "@angular/core";
import { StoryService } from "../story.service";
import { AuthenticationService } from "../authentication.service";
import { TokenService } from "../token.service";
import { routerTransition } from "../animations/routerTransition";
import * as io from "socket.io-client";
import { socketURI } from "../config";

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
  private editModal: boolean = false;
  private storyForEditModal: any;
  private socket;

  constructor(private service: StoryService, private as: AuthenticationService, private token: TokenService) {

  }

  ngOnInit() {
    let token = localStorage.getItem("token");
    this.token.decode(token).subscribe(res => {
      this.user = res;
    });
    this.service.getStory().subscribe(res => {
      this.stories = res;
      console.log(this.stories);
    });


    this.socket = io.connect(socketURI);
    this.socket.on('server-to-client-new-story-deleted', socket => {
      this.deleteStoryInStories(socket);
    });



  }

  edit(id) {
    this.editModal = true;
    let story = this.stories.filter((v) => v._id == id);
    this.storyForEditModal = story[0];
  }

  delete(story) {
    this.service.deleteStory(story)
      .subscribe(data => {
        this.socket.emit("client-to-server-new-story-deleted", story);
        this.deleteStoryInStories(story);
      });
  }

  deleteStoryInStories(story){
    console.log("__________________________");
    console.log(story);
    this.stories = this.stories.filter(v => {
      return v._id != story._id;
    });
  }


  onStoryAdded(event: any) {
    console.log(event);
    this.stories.unshift(event);
    console.log("emit berhasil dilakukan");
    console.log(this.stories);
  }

  onBack(event: any) {
    this.editModal = event;
  }

  logout() {
    this.as.logout();
  }
}
