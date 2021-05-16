/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { <%= classify(name) %>DataService } from './<%= dasherize(name) %>-data.service';

describe('Service: <%= classify(name) %>Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        <%= classify(name) %>DataService
      ]
    });
  });

  it('should ...', inject([<%= classify(name) %>DataService], (service: <%= classify(name) %>DataService) => {
    expect(service).toBeTruthy();
  }));
});
