import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessageExtractor {


    extractContent(message:Message):string {
        return message.contenu;
    }

}