// import { LoadLeagueSuccess, LoadLeagueFail } from './../actions/league.actions';
// import { League } from './../../models/league.model';
// import { LeagueService } from './../../service/league-service/league.service';

// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Injectable } from '@angular/core';
// import { loadLeague } from '../actions/league.actions';
// import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Injectable()
// export class LeagueEffects {
//     constructor(
//         private actions$: Actions,
//         private leagueService: LeagueService
//     ) { }

//     @Effect()
//     loadLeague$ = this.actions$.pipe(
//         ofType(loadLeague),
//         debounceTime(2000),
//         switchMap(accion => {
//             // const body = accion['body'];
//             // const timeZone = accion['timeZone'];
//             // const documentData = accion['documentData'];

//             return this.leagueService.getLeague().pipe(
//                 map((league: League[]) => new LoadLeagueSuccess(league)),
//                 catchError((error: string) => of(new LoadLeagueFail(error)))
//             );
//         })
//     );
// }
