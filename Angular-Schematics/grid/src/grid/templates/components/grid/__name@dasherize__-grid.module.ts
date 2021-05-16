import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseGridModule } from 'src/app/shared/grid/base-grid.module';

import { <%= classify(name) %>GridComponent } from './<%= dasherize(name) %>-grid.component';
import { <%= classify(name) %>ColumnsProvider } from './<%= dasherize(name) %>-columnsProvider';
import { <%= classify(name) %>OptionsProvider } from './<%= dasherize(name) %>-optionsProvider';
import { <%= classify(name) %> } from '../../models/<%= dasherize(name) %>';

@NgModule({
  imports: [
    CommonModule,
    BaseGridModule
  ],
  declarations: [
    <%= classify(name) %>GridComponent
  ],
  providers: [
    <%= classify(name) %>ColumnsProvider,
    <%= classify(name) %>OptionsProvider,
    <%= classify(name) %>
  ],
  exports: [
    <%= classify(name) %>GridComponent
  ]
})
export class <%= classify(name) %>GridModule { }
