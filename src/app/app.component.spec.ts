import { ComponentFixture } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';
/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync  } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '@angular/compiler/src/core';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [AppRoutingModule]
    });
    TestBed.compileComponents();
  });

  it('should create the app', waitForAsync (() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
