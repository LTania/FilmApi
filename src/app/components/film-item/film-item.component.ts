import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from "../../core/film.service";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.sass']
})
export class FilmItemComponent implements OnInit {
  @Input() filmId;
  public film = [];
  public notFound = false;

  constructor(private service: FilmService) { }

  ngOnInit(): void {
    this.notFound = false;

    const subscription =  this.service.findDetailsById(this.filmId)
      .subscribe((response: any) => {
          if (response.Error === 'Movie not found!') {this.notFound = true; }
          this.film.push(response);
          subscription.unsubscribe();
        }
      );
    console.log(this.film);
  }

}
