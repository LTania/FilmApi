import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import {HttpClientModule} from '@angular/common/http';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FavouriteFilmsComponent } from './components/favourite-films/favourite-films.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmSearchComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    FilmItemComponent,
    FavouriteFilmsComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
