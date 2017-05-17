import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { StoryService } from "../story.service";
import * as io from "socket.io-client";
import { socketURI } from "../config";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  public story: string = '';
  public unclickable: boolean = this.story.length < 1;
  private socket;
  @Output() onStoryAddedEventEmitter = new EventEmitter();

  constructor(public ss: StoryService) {
  }

  ngOnInit() {
    this.socket = io.connect(socketURI);
    this.socket.on('server-to-client-new-story-added', socket => {
      console.log(socket);
      this.onStoryAddedEventEmitter.emit(socket);
    });
  }

  postStory() {
    this.ss.postStory(this.story).subscribe(res => {
      this.onStoryAddedEventEmitter.emit(res[0]);
      this.socket.emit('client-to-server-new-story-added', res[0]);

      this.story = '';
    });
  }

}
