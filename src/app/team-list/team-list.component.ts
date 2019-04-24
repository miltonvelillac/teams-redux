import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { teamsMock } from '../service/mock/teams-mock';
import { League } from '../models/league.model';
import { leaguesMock } from '../service/mock/leagues-mock';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];
  leagues: Map<string, string> = new Map();

  constructor() { }

  ngOnInit() {
    this.teams = [...teamsMock.map((team: Team) => ({...team}))];
    this.getLeagues();
  }

  getLeagues() {
    const leaguesList = [...leaguesMock.map((league: League) => ({...league}))];
    leaguesList.forEach((league: League) => this.leagues.set(league.leagueCode, league.name));
  }

}
