import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StoryService} from "../story.service";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  public story: any;
  @Output() onStoryAdded = new EventEmitter();

  constructor(public ss: StoryService) { }
  ngOnInit() { }

  postStory() {
    this.ss.postStory(this.story).subscribe(res => {
      console.log(res);
      this.onStoryAdded.emit(res);
      this.story = null;
    });
  }

}
