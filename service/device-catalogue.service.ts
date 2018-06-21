import { Injectable } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceCatalogueService {
  itemsListed$: Observable<any>;
  itemAdded$: Observable<any>;
  itemUpdated$: Observable<any>;
  itemDeleted$: Observable<any>;

  constructor(private socket: SocketService) {
    this.socket.join('DeviceCatalogue');
    // Every socket DeviceCatalogue event has it's own observable, will be used by ngrx effects
    this.itemsListed$ = this.socket.listen('[DeviceCatalogue] Items Listed');
    this.itemAdded$ = this.socket.listen('[DeviceCatalogue] Item Added');
    this.itemUpdated$ = this.socket.listen('[DeviceCatalogue] Item Updated');
    this.itemDeleted$ = this.socket.listen('[DeviceCatalogue] Item Deleted');
  }

  // These methods will be called by ngrx effects (do not use directly in the components)
  loadCatalogueItems() {
    this.socket.emit('[DeviceCatalogue] List');
  }

  addNote(note) {
    this.socket.emit('[DeviceCatalogue] Add', note);
  }

  updateNote(note) {
    this.socket.emit('[DeviceCatalogue] Update', note);
  }

  deleteNote(note) {
    this.socket.emit('[DeviceCatalogue] Delete', note);
  }
}
