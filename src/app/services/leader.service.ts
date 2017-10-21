import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';


@Injectable()
export class LeaderService {

  constructor() { }


  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

   getLeader(id: number): Promise<Leader> {
     return Promise.resolve(LEADERS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((promo) => promo.featured)[0]);
  }




}
