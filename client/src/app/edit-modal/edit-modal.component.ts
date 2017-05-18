import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoryService } from "../story.service";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @Input() story: any;
  @Output() onBackEventEmitter = new EventEmitter();
  constructor(private ss: StoryService) { }

  ngOnInit() {
  }

  save(){
    this.ss.updateStory(this.story).subscribe(res => {
      console.log(res);
      this.exit();
    });
  }

  exit(){
    this.onBackEventEmitter.emit(false);
  }

}
