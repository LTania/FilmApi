import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../core/film.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.sass']
})
export class FilmSearchComponent implements OnInit {
  public title = '';
  public films = [];
  public notFound = false;

  constructor(public service: FilmService) {
  }

  ngOnInit(): void {
  }
  getFilms() {
    this.films = [];
    this.notFound = false;

    const subscription =  this.service.fingFilmsByTitle(this.title)
      .subscribe((response: any) => {
          if (response.Error === 'Movie not found!') {this.notFound = true; }
          this.films.push(response);
          subscription.unsubscribe();
        }
      );
  }
}
