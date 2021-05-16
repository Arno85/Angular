import { Component, OnInit, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BaseGridComponent } from 'src/app/shared/grid/base-grid.component';

import { <%= classify(name) %>ColumnsProvider } from './<%= dasherize(name) %>-columnsProvider';
import { <%= classify(name) %>OptionsProvider } from './<%= dasherize(name) %>-optionsProvider';
import { <%= classify(name) %> } from '../../models/<%= dasherize(name) %>';
import { <%= classify(name) %>EventService } from '../../services/<%= dasherize(name) %>-event.service';
import { <%= classify(name) %>LogicService } from '../../services/<%= dasherize(name) %>-logic.service';

@Component({
  selector: 'app-<%= dasherize(name) %>-grid',
  templateUrl: 'src/app/shared/grid/base-grid.component.html',
  styleUrls: []
})
export class <%= classify(name) %>GridComponent extends BaseGridComponent<<%= classify(name) %>> implements OnInit {

  constructor(
    private _columnsProvider: <%= classify(name) %>ColumnsProvider,
    private _optionsProvider: <%= classify(name) %>OptionsProvider,
    private _eventService: <%= classify(name) %>EventService,
    private _logicService: <%= classify(name) %>LogicService,
    private _model: <%= classify(name) %>,
    private _translateService: TranslateService,
    private _el: ElementRef
  ) {
    super(
      _columnsProvider,
      _optionsProvider,
      _eventService,
      _logicService,
      _model,
      _translateService.get('<%= dasherize(name) %>.no_rows'),
      _el.nativeElement.tagName.toLowerCase()
    );
  }

  public ngOnInit(): void {
    // Call to load data for the grid. By default it's called on Init but it can be called on a specific event (button clicked, ...)
    // The BaseGridComponent will subscribe the observable gridData from the logic service.
    this._logicService.getGridData();
  }

}
