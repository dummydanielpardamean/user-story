import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoryService } from "../story.service";
import * as io from 'socket.io-client';
import { socketURI } from "../config";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @Input() story: any;
  @Output() onBackEventEmitter = new EventEmitter();
  private socket;
  constructor(private ss: StoryService) { }

  ngOnInit() {
    this.socket = io.connect(socketURI);
    this.socket.on('server-to-client-new-story-edited', socket => {
      console.log(socket);
    });
  }

  save(){
    this.ss.updateStory(this.story).subscribe(res => {
      console.log(res);
      this.socket.emit('client-to-server-new-story-edited', this.story);
      this.exit();
    });
  }

  exit(){
    this.onBackEventEmitter.emit(false);
  }

}
