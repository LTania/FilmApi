import {Component, Input, OnChanges} from '@angular/core';
import {FilmService} from '../../core/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.sass']
})
export class FilmDetailsComponent implements OnChanges {
 @Input() filmId;
  public film = [];
  public notFound = false;
  public isFavourite = false;
  private myFilms = [];

  constructor(private service: FilmService) { }

  ngOnChanges(): void {
    this.notFound = false;
    this.isFavourite = false;
    this.film.length = 0;
    const subscription = this.service.findDetailsById(this.filmId)
      .subscribe((response: any) => {
          if (response.Error === 'Movie not found!') {
            this.notFound = true;
          } else {
            this.film.push(response);
            this.myFilms = JSON.parse(localStorage.getItem('myFilms'));
            if (this.myFilms && this.myFilms.find((s) => s === this.film[0].imdbID)) {
              this.isFavourite = true;
            }
            subscription.unsubscribe();
          }
        }
      );
  }
  addToFav(filmId) {
    this.myFilms = JSON.parse(localStorage.getItem('myFilms'));
    if (this.myFilms){
      this.myFilms.push(filmId);
      localStorage.setItem('myFilms', JSON.stringify(this.myFilms));
      this.isFavourite = true;
    } else {
      const films = [];
      films[0] = filmId;
      localStorage.setItem('myFilms', JSON.stringify(films));
      this.isFavourite = true;
    }
  }
  removeFromFav(filmId) {
    this.myFilms = JSON.parse(localStorage.getItem('myFilms'));
    this.myFilms = this.myFilms.filter((f) => f !== filmId);
    localStorage.setItem('myFilms', JSON.stringify(this.myFilms));
    this.isFavourite = false;
  }
}
