import { Base64Service } from './base64.service';
import { Component } from '@angular/core';


@Component({
  selector: 'converter',
  templateUrl: './converter.html',
  styleUrls: ['./converter.css']
})
export class ConverterComponent {

  constructor(private base64Service: Base64Service) {

  }

  convertToBase64(input: string) {
    return this.base64Service.toBase64(input);
  }
}


