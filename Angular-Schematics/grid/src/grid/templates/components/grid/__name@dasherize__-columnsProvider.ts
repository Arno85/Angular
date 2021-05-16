import { BaseColDef } from 'src/app/shared/grid/models/baseColDef';
import { IColumnsProvider } from 'src/app/shared/grid/injection/IColumnsProvider';

export class <%= classify(name) %>ColumnsProvider implements IColumnsProvider {

  public getColumnDefs(isEditable?: boolean): BaseColDef[] {

    // Declare here your columns definitions
    const colDefs = <BaseColDef[]> [];

    colDefs.map(x => {
      if (x.field !== 'selection') {
          // Declare here your common options for all columns
          x.sortable = true,
          x.filter = true,
          x.enableRowGroup = true;
      }
    });

    return colDefs;
  }
}
