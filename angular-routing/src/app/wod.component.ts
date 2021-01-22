import { Component } from "@angular/core";
import { Wod } from "./wod";

@Component({
    selector: 'wod',
    templateUrl: './wod.component.html',
    styleUrls: ['./wod.component.css']
  })
  export class WodComponent {
    current: Wod;
  }