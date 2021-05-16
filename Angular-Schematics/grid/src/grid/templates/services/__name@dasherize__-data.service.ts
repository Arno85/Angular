import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { <%= classify(name) %> } from '../models/<%= dasherize(name) %>';

@Injectable()
export class <%= classify(name) %>DataService {

  private readonly _apiUrl: string = environment.apiUrl;
  private readonly _controller: string = '<%= dasherize(name) %>';

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<<%= classify(name) %>[]> {
    return this._http.get<<%= classify(name) %>[]>(`${this._apiUrl}${this._controller}`);
  }

}
