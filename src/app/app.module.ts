import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import {HttpClientModule} from '@angular/common/http';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FavouriteFilmsComponent } from './components/favourite-films/favourite-films.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmSearchComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    FilmItemComponent,
    HeaderComponent,
    FavouriteFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
