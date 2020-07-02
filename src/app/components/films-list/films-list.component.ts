import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})
export class FilmsListComponent implements OnInit {
  @Input() films;
  public selectedFilm = false;
  public filmId = '';

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(filmId) {
    this.selectedFilm = true;
    this.filmId = filmId;
  }

}
