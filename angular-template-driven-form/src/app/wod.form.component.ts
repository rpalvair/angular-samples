import { Component } from '@angular/core';
import { Wod } from './wod';


@Component({
  selector: 'wod-form',
  templateUrl: './wod.form.component.html',
  styleUrls: ['./wod.form.component.css']
})
export class WodFormComponent {
 
  types = ["AMRAP","AFAT"];

  current = new Wod(null,null);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.current); }
}


