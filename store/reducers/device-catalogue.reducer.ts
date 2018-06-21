import {
  DeviceCatalogueActions,
  DeviceCatalogueActionTypes
} from '../actions/device-catalogue.actions';

export interface State {
  loaded: boolean;
}

export const initialState: State = {
  loaded: false
};

export function reducer(
  state = initialState,
  action: DeviceCatalogueActions
): State {
  switch (action.type) {
    case DeviceCatalogueActionTypes.LoadCatalogueItems:
      return state;

    default:
      return state;
  }
}
