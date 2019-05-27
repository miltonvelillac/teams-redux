import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { AppRoutingModule } from './app.routes';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LeagueComponent } from './league/league.component';
import { environment } from 'src/environments/environment';
// import { appReducers } from './app.reducer';
// import { LeagueEffects } from './store/effects/league.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamListComponent,
    ConfigurationComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot(appReducers),
    // EffectsModule.forRoot([LeagueEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
