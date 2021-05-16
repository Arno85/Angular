import { Injectable } from '@angular/core';
import { RowNode } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { BaseGridLogicService } from 'src/app/shared/grid/services/logic/base-grid-logic.service';
import { IBaseLogicService } from 'src/app/shared/grid/services/logic/IBaseLogicService';

import { <%= classify(name) %> DataService } from './<%= dasherize(name) %>-data.service';
import { <%= classify(name) %> } from '../models/<%= dasherize(name) %>';

@Injectable()
export class <%= classify(name) %>LogicService extends BaseGridLogicService implements IBaseLogicService {

  public gridData = new Observable <<%= classify(name) %> [] > ();

  constructor(
    private _dataService: <%= classify(name) %> DataService
  ) {
    super();
  }

  public getGridData(): Observable <<%= classify(name) %> [] > {
    return this.gridData = this._dataService.getAll();
  }

  public save(rowNodes: RowNode[]): Promise < any > {
    throw new Error('method not implemented');
  }

  public checkIfDataIsValid(rowNodes: RowNode): boolean {
    throw new Error('method not implemented');
  }
}
