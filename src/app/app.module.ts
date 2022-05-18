import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule}  from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Team1Component } from './components/team1/team1.component';
import { Team2Component } from './components/team2/team2.component';
import { Team3Component } from './components/team3/team3.component';
import { MaterialModule} from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    Team1Component,
    Team2Component,
    Team3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
