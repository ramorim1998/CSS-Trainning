import { AppsComponent } from './apps/apps.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'games', component: GamesComponent},
  {path: 'apps', component: AppsComponent},
  {path: '' ,redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
