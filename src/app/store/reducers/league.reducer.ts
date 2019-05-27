// import { loadLeagueSuccess, loadLeagueFail } from './../actions/league.actions';
// import { League } from './../../models/league.model';
// import { leagueActions, selectLeague, loadLeague } from '../actions/league.actions';

// export interface LeagueState {
//     leagues: League[];
//     error: string;
// }

// export const initState: LeagueState = {
//     leagues: [],
//     error: undefined
// };


// export function leagueReducer(state = initState, action: leagueActions): LeagueState {
//     switch (action.type) {
//         case loadLeagueSuccess:
//             return {
//                 ...state,
//                 leagues: [...action.leagues.map((league: League) => ({ ...league }))]
//             };
//         case loadLeagueFail:
//             return {
//                 ...state,
//                 leagues: [],
//                 error: action.error
//             };
//         case selectLeague:
//             return {
//                 ...state,
//                 leagues: [...action.leagues.map((league: League) => ({ ...league }))]
//             };
//         case loadLeague:
//         default:
//             return {
//                 ...state
//             };
//     }
// }
