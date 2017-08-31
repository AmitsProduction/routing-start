import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';

export interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()

export class ServerResolver implements Resolve<Server> {

  constructor(private servers: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      Server | Observable<Server> | Promise<Server> {
      return this.servers.getServer(+route.params['id']);
  }
}
