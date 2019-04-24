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
  leagues: League[] = [];

  constructor() { }

  ngOnInit() {
    this.leagues = [...leaguesMock.map((league: League) => ({...league}))];
    this.teams = [...teamsMock.map((team: Team) => ({...team}))];
  }

}
