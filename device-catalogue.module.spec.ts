import { DeviceCatalogueModule } from './device-catalogue.module';

describe('DeviceCatalogueModule', () => {
  let deviceCatalogueModule: DeviceCatalogueModule;

  beforeEach(() => {
    deviceCatalogueModule = new DeviceCatalogueModule();
  });

  it('should create an instance', () => {
    expect(deviceCatalogueModule).toBeTruthy();
  });
});
