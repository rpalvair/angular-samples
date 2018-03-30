export class Message {
    constructor(
        public id: number,
        public from: string,
        public objet: string,
        public contenu: string,
        public date: Date) {
    }
}