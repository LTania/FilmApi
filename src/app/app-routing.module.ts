import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmSearchComponent} from './components/film-search/film-search.component';
import { FavouriteFilmsComponent} from './components/favourite-films/favourite-films.component';

const routes: Routes = [
  {path: '', component: FilmSearchComponent},
  {path: 'fav-films', component: FavouriteFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
