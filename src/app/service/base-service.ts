import { inject } from '@angular/core';
import { StateService } from './state-service/state.service';

export abstract class BaseService {
  stateService = inject(StateService);
}
