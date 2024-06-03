import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  public animeList: Anime[] = [];

  constructor() {}

  public getAnimeList(): Observable<Anime[]> {
    this.animeList = JSON.parse(localStorage.getItem('animes') || '[]');
    return of(this.animeList);
  }
  public addAnime(anime: Anime): Observable<Anime> {
    this.animeList = [...this.animeList, anime];
    localStorage.setItem('animes', JSON.stringify(this.animeList));
    return of(anime);
  }
  public deleteAnime(animeList: Anime[]): Observable<Anime[]> {
    localStorage.setItem('animes', JSON.stringify(animeList));
    return of();
  }
}
