import { Component, OnInit } from '@angular/core';
import { leaguesMock } from '../service/mock/leagues-mock';
import { League } from '../models/league.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  form: FormGroup;
  leagues: League[];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getLeagues();
    this.createForm();
  }

  getLeagues() {
    this.leagues = leaguesMock;
  }

  createForm() {
    const controls = this.leagues.map(league => new FormControl(league.check));
    this.form = this.formBuilder.group({
      leagues: new FormArray(controls)
    });
  }

}
