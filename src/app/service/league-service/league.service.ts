import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from 'src/app/models/league.model';
import { leaguesMock } from '../mock/leagues-mock';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor() { }

  getLeague(): Observable<League[]> {
    return of(leaguesMock);
  }
}
