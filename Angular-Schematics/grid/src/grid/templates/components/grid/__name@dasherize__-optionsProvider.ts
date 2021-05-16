import { BaseGridOptionsProvider } from 'src/app/shared/grid/injection/baseGridOptionsProvider';
import { IBaseGridOptionsProvider } from 'src/app/shared/grid/injection/IBaseGridOptionsProvider';

export class <%= classify(name) %>OptionsProvider extends BaseGridOptionsProvider implements IBaseGridOptionsProvider {

  public getGridOptions() {
    return super.getBaseGridOptions();
  }
}
