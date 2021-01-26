import { Injectable } from "@angular/core";

@Injectable()
export class Base64Service {
  constructor() {}

  toBase64(input: string) {
    return btoa(input);
  }
}
