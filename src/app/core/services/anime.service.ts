import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.interface';
import { AnimeState } from '../constants/anime';
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
  public disableAnime(id: string): Observable<Anime> {
    this.animeList = this.animeList.filter((anime) => anime.id !== id);
    localStorage.setItem('animes', JSON.stringify(this.animeList));
    return of();
  }
}
