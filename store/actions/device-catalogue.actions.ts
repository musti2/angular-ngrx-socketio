import { Action } from '@ngrx/store';

export enum DeviceCatalogueActionTypes {
  AddItem = '[DeviceCatalogue] AddItem',
  DeleteItem = '[DeviceCatalogue] DeleteItem',
  UpdateItem = '[DeviceCatalogue] UpdateItem',
  LoadCatalogueItems = '[DeviceCatalogue] LoadCatalogueItems',
  LoadCatalogueItemsSuccess = '[DeviceCatalogue] LoadCatalogueItemsSuccess'
}

export class LoadCatalogueItems implements Action {
  readonly type = DeviceCatalogueActionTypes.LoadCatalogueItems;
}

export class LoadCatalogueItemsSuccess implements Action {
  readonly type = DeviceCatalogueActionTypes.LoadCatalogueItemsSuccess;
  constructor(public payload) {}
}

export class AddItem implements Action {
  readonly type = DeviceCatalogueActionTypes.AddItem;
  constructor(public payload) {}
}

export class DeleteItem implements Action {
  readonly type = DeviceCatalogueActionTypes.DeleteItem;
  constructor(public payload) {}
}

export class UpdateItem implements Action {
  readonly type = DeviceCatalogueActionTypes.UpdateItem;
  constructor(public payload) {}
}

export type DeviceCatalogueActions =
  | LoadCatalogueItems
  | LoadCatalogueItems
  | AddItem
  | DeleteItem
  | UpdateItem;
