import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
// import { AppState } from '../app.reducer';
import { League } from '../models/league.model';
// import { SelectLeague, LoadLeague } from '../store/actions/league.actions';
// import { LeagueState } from '../store/reducers/league.reducer';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit, OnDestroy {

  form: FormGroup;
  leagues: League[];
  subscripcions$ = new Subscription();
  subscripcionsLeague$ = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    // private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getLeagues();
  }

  ngOnDestroy() {
    this.subscripcions$.unsubscribe();
    this.subscripcionsLeague$.unsubscribe();
  }

  getLeagues(): void {
    // this.store.dispatch(new LoadLeague());
    // this.subscripcionsLeague$ = this.store.pipe(
    //   map((state: any) => state ? state.leagueState : undefined),
    //   map((leagueState: LeagueState) => leagueState ? leagueState.leagues : []),
    //   tap((league: League[]) => this.leagues = league),
    //   tap(() => this.createForm()),
    //   tap(() => this.listenCheckBox())
    // ).subscribe();
  }

  createForm(): void {
    if (this.leagues && this.leagues.length > 0) {
      const controls = this.leagues.map(league => new FormControl(league.check));
      this.form = this.formBuilder.group({
        leagues: new FormArray(controls)
      });
    }
  }

  listenCheckBox(): void {
    if (this.leagues && this.leagues.length > 0) {
      this.subscripcions$ = this.form.get('leagues').valueChanges
      .pipe(
        distinctUntilChanged(),
        map((checkLeague: any[]) =>
          checkLeague.map((value, index) => {
            return {
              ...this.leagues[index],
              check: value
            };
          })
        ),
        // map((selectedLeagues: League[]) => this.store.dispatch(new SelectLeague(selectedLeagues)))
      ).subscribe(
        val => console.log(val)
      );
    }
  }

}
