import { Injectable } from '@angular/core';
import { Message } from '../../domain/message';

@Injectable()
export class MessageExtractor {


    extractContent(message:Message):string {
        return message.contenu;
    }

}