import { DeviceCatalogueService } from './../../service/device-catalogue.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DeviceCatalogueActionTypes } from '../actions/device-catalogue.actions';
import { tap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as dcActions from './../actions/device-catalogue.actions';

@Injectable()
export class DeviceCatalogueEffects {
  // effect will not dispatch any actions
  @Effect({ dispatch: false })
  listNotes$ = this.actions$
    .ofType(DeviceCatalogueActionTypes.LoadCatalogueItems)
    .pipe(tap(() => this.dcService.loadCatalogueItems()));

  // listen to the socket for LIST event
  @Effect()
  itemsListed$: Observable<Action> = this.dcService.itemsListed$.pipe(
    switchMap(
      // ask the the store to populate the notes
      items => of(new dcActions.LoadCatalogueItemsSuccess(items))
    )
  );

  constructor(
    private actions$: Actions,
    private dcService: DeviceCatalogueService
  ) {}
}
