import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Team1Component } from './components/team1/team1.component';
import { Team2Component } from './components/team2/team2.component';
import { Team3Component } from './components/team3/team3.component';
const routes: Routes = [


  { path: '', component:MainComponent},
  { path: 'team1', component: Team1Component },
  { path: 'team2', component: Team2Component },
  { path: 'team3', component: Team3Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
