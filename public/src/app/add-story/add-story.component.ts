import {Component, EventEmitter, Output} from "@angular/core";
import {StoryService} from "./../services/StoryService";

@Component({
    moduleId: module.id,
    selector: 'add-story',
    templateUrl: './add-story.html',
    styleUrls: ['./add-story.css']
})

export class AddStoryComponent {
    public story: any;

    @Output() onStoryAdded = new EventEmitter();

    constructor(public ss: StoryService) {
    }

    postStory() {
        this.ss.postStory(this.story).subscribe(res => {
            console.log(res);
            this.onStoryAdded.emit(res);
            this.story = null;
        });
    }
}
