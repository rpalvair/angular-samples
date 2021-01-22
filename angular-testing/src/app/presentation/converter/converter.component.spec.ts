import { ConverterComponent } from "./converter.component";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Base64Service } from "../../application/base64/base64.service";

describe("Tester le composant converter", () => {
  let comp: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const base64ServiceMock = {};

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConverterComponent],
        imports: [FormsModule],
        providers: [{ provide: Base64Service, useValue: base64ServiceMock }]
      }).compileComponents();
      fixture = TestBed.createComponent(ConverterComponent);
      comp = fixture.componentInstance;
    })
  );

  it("converter should contains a form with a form group for the input to convert", () => {
    let input: DebugElement = fixture.debugElement.query(
      By.css("form .form-group .form-control")
    );
    let element: HTMLElement = input.nativeElement;
    expect(element).not.toBeNull();
    expect(element.getAttribute("name")).toEqual("valeur");
  });
});
