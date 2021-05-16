import { Injectable } from '@angular/core';

import { BaseGridEventService } from 'src/app/shared/grid/services/event/base-grid-event.service';

@Injectable()
export class <%= classify(name) %>EventService extends BaseGridEventService {

  constructor() {
    super();
  }

}
