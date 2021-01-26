import { Component } from "@angular/core";
import { Wod } from "../wod";

@Component({
    selector: 'wod-view',
    templateUrl: './wod.view.component.html',
    styleUrls: ['./wod.view.component.css']
  })
  export class WodViewComponent {
    current: Wod;
  }