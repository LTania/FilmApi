import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-films',
  templateUrl: './favourite-films.component.html',
  styleUrls: ['./favourite-films.component.sass']
})
export class FavouriteFilmsComponent implements OnInit {
  public myFilms = [];
  ngOnInit(): void {
    this.myFilms = JSON.parse(localStorage.getItem('myFilms'));
  }
}
