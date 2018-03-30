import { MessageExtractor } from './message.extractor';
import { Observable } from "rxjs/Observable";
import { Message } from "../../domain/message";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';


@Injectable()
export class MessageService {

    constructor(private http: HttpClient,
        private messageExtractor: MessageExtractor) {
    }

    findAll(): Observable<Message[]> {
        return this.http.get("api/messages")
            .pipe(
                catchError(this.handleError)
            );

    }
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }


    getContent(message: Message) {
        return this.messageExtractor.extractContent(message);
    }

    concatContent(messages: Message[]) {
        let content = '';
        messages.forEach(function (item) {
            content += item;
        });
        return content;
    }
}