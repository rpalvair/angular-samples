import { Component } from "@angular/core";
import { Base64Service } from "./base64/base64.service";

@Component({
  selector: "converter",
  templateUrl: "./converter.html",
  styleUrls: ["./converter.css"]
})
export class ConverterComponent {
  input: string;
  submitted = false;
  result: string;

  constructor(private base64Service: Base64Service) {}

  convertToBase64() {
    this.submitted = true;
    this.result = this.base64Service.toBase64(this.input);
  }
}
