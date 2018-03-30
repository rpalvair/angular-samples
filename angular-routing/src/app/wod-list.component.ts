import { Component } from "@angular/core";
import { Wod } from "./wod";

@Component({
    selector: 'wod-list',
    templateUrl: './wod-list.html',
    styleUrls: ['./wod.component.css']
})
export class WodListComponent {

    wods: Wod[] = this.getWodList();
    current: Wod;

    private getWodList(): Wod[] {
        return [
            new Wod("wod1"),
            new Wod("wod2")
        ]
    }

    public onSubmit() {
        console.log("activer routage");
    }
}