import { MessageExtractor } from './message.extractor';
import { Message } from './../../domain/message';
import { HttpClient } from '@angular/common/http';
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MessageService } from "./message.service";
import { asyncData } from '../../../../testing/async.observable.helper';

describe("Testing MessageService by simulate its dependencies", () => {

    let httpClientSpy: { get: jasmine.Spy };
    let messageService: MessageService;
    let messageExtractorSpy: jasmine.SpyObj<MessageExtractor>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MessageService,
                { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get']) },
                { provide: MessageExtractor, useValue: jasmine.createSpyObj('MessageExtractor', ['extractContent']) }
            ]
        });
        httpClientSpy = TestBed.get(HttpClient);
        messageService = TestBed.get(MessageService)
        messageExtractorSpy = TestBed.get(MessageExtractor);
    });


    it("message service should return messages from api call", () => {
        let expectedMessages = [
            new Message(1, "Julie", "Bienvenue", "Salut!", new Date()),
            new Message(2, "Julie", "Rappel", "N'oublie pas", new Date())
        ];

        httpClientSpy.get.and.returnValue(asyncData(expectedMessages));

        messageService.findAll().subscribe(
            messages => expect(messages).toEqual(expectedMessages, 'expected messages'),
            fail
        );

        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });


    it("MessageService should return content received from MessageExtractor", () => {
        let message = new Message(1, "Julie", "Bienvenue", "Salut!", new Date());

        messageExtractorSpy.extractContent.and.returnValue("Hello");

        let contentExtracted = messageService.getContent(message);

        expect(contentExtracted).toEqual("Hello");
        expect(messageExtractorSpy.extractContent.calls.count()).toBe(1, 'one call');
    });
});
