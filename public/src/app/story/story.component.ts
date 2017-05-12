import {Component} from "@angular/core";
import {StoryService} from "../services/StoryService";
import {AuthenticationService} from "../services/AuthenticationService";

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: './story.html',
    providers: [StoryService],
    styleUrls: ['story.css']
})

export class StoryComponent {
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
