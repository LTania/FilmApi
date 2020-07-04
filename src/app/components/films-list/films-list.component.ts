import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})
export class FilmsListComponent  {
  @Input() films;
  public selectedFilm = false;
  public filmId = '';

  showDetail(filmId) {
    this.selectedFilm = true;
    this.filmId = filmId;
  }

}
