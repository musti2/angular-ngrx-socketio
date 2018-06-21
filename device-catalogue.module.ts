import { DeviceCatalogueService } from './service/device-catalogue.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DeviceCatalogueEffects } from './store/effects/device-catalogue.effects';
import * as fromDeviceCatalogue from './store/reducers/device-catalogue.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('deviceCatalogue', fromDeviceCatalogue.reducer),
    EffectsModule.forFeature([DeviceCatalogueEffects])
  ],
  declarations: [],
  providers: [DeviceCatalogueService]
})
export class DeviceCatalogueModule {}
