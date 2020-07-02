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

  constructor(private service: FilmService) { }

  ngOnChanges(): void {
    this.notFound = false;
    this.film.length = 0;
    const subscription =  this.service.findDetailsById(this.filmId)
      .subscribe((response: any) => {
          if (response.Error === 'Movie not found!') {this.notFound = true; }
          this.film.push(response);
          subscription.unsubscribe();
        }
      );
  }
}
