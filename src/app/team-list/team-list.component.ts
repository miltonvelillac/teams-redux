import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
// import { AppState } from '../app.reducer';
import { League } from '../models/league.model';
import { Team } from '../models/team.model';
import { teamsMock } from '../service/mock/teams-mock';
import { tap, map } from 'rxjs/operators';
// import { LeagueState } from '../store/reducers/league.reducer';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {

  teams: Team[] = [];
  leagues: Map<string, string> = new Map();
  subscripcions$ = new Subscription();

  constructor(
    // private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.listenStoreLeague();
  }

  ngOnDestroy() {
    this.subscripcions$.unsubscribe();
  }

  listenStoreLeague(): void {
    // this.subscripcions$ = this.store.select(state => state.leagueState).pipe(
    //   map((leagueState: LeagueState) => leagueState ? leagueState.leagues : undefined),
    //   map((leagues: League[]) => this.getLeagues(leagues)),
    //   tap((leagues: League[]) => this.setLeaguesToMap(leagues)),
    //   map(() => this.getTeams()),
    //   tap((teams: Team[]) => this.teams = teams)
    // ).subscribe();
  }

  getTeams(): Team[] {
    return teamsMock.filter((team: Team) => this.leagues.has(team.leagueCode));
  }

  getLeagues(leaguesList: League[]): League[] {
    return leaguesList && leaguesList.length > 0 ? leaguesList.filter((league: League) => league.check) : [];
  }

  setLeaguesToMap(leaguesList: League[]): void {
    this.leagues = new Map();
    if (leaguesList && leaguesList.length > 0) {
      leaguesList.forEach((league: League) => this.leagues.set(league.leagueCode, league.name));
    }
  }

}
