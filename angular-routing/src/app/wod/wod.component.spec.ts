import { By } from '@angular/platform-browser';
import { WodComponent } from './wod.component';
import { AppRoutingModule } from '../app-routing.module';
/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync  } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('WodComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WodComponent
      ],
      imports: [AppRoutingModule,FormsModule]
    });
    TestBed.compileComponents();
  });

  it('should instanciate the wod component', waitForAsync (() => {
    const fixture = TestBed.createComponent(WodComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Wod Project'`, waitForAsync (() => {
    const fixture = TestBed.createComponent(WodComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Wod Project');
  }));

  it('should render title in a h1 tag', waitForAsync (() => {
    const fixture = TestBed.createComponent(WodComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Wod Project');
  }));

  it('should display the wod list in a select', waitForAsync (() => {
    const fixture = TestBed.createComponent(WodComponent);
    fixture.detectChanges();
    let debugElement: DebugElement = fixture.debugElement;
    let select: DebugElement = debugElement.query(By.css("select.form-control"));
    expect(select).toBeTruthy();
    const options: DebugElement[] = select.queryAll(By.css("option"));
    expect(options).toHaveSize(2);
    const firstWod: HTMLElement = options[0].nativeElement;
    expect(firstWod.textContent).toEqual("wod1");
    const secondWod: HTMLElement = options[1].nativeElement;
    expect(secondWod.textContent).toEqual("wod2");
  }));
});
