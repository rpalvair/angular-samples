import { Base64Service } from './base64.service';

describe('Tests unitaires de Base64Service', () => {
    let base64Service: Base64Service = new Base64Service();


    it("#add should convertir 'toto' en base 64", () => {
        expect(base64Service.toBase64("toto")).toBe("dG90bw==");
    })

});