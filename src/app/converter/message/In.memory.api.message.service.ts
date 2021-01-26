import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Message } from "./message";

@Injectable()
export class InMemoryApiMessageService implements InMemoryDbService {
    createDb() {
        console.log("création de la base InMemory");
        let messages = [
            new Message(1, "Julie", "Bienvenue", "Salut!", new Date()),
            new Message(2, "Julie", "Rappel", "N'oublie pas", new Date()),
            new Message(3, "Arthur", "Long texte", "Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis parcens nec urbium primatibus nec plebeiis.", new Date())
        ];
        return { messages };
    }
}