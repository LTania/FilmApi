import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor (private http: HttpClient) { }

  public fingFilmsByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=da53126b';
    return this.http.get(url);
  }

  public findDetailsById(id: string) {
    const url = 'http://www.omdbapi.com/?i=' + id + '&apikey=da53126b';
    return this.http.get(url);
  }
}

