/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { <%= classify(name) %>LogicService } from './<%= dasherize(name) %>-logic.service';

describe('Service: <%= classify(name) %>Logic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        <%= classify(name) %>LogicService
      ]
    });
  });

  it('should ...', inject([<%= classify(name) %>LogicService], (service: <%= classify(name) %>LogicService) => {
    expect(service).toBeTruthy();
  }));
});
