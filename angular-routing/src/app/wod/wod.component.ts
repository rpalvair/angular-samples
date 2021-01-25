import { Component } from "@angular/core";
import { Wod } from "./wod";

@Component({
    selector: 'wod',
    templateUrl: './wod.html',
    styleUrls: ['./wod.component.css']
})
export class WodComponent {

    wods: Wod[] = this.getWodList();
    current: Wod;

    private getWodList(): Wod[] {
        return [
            new Wod("wod1",null),
            new Wod("wod2",null)
        ]
    }

    public onSubmit() {
        console.log("activer routage");
    }
}