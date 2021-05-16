/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { <%= classify(name) %>GridComponent } from './<%= dasherize(name) %>-grid.component';

describe('<%= classify(name) %>GridComponent', () => {
  let component: <%= classify(name) %>GridComponent;
  let fixture: ComponentFixture<<%= classify(name) %>GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(name) %>GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
