import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.interface';
import { Observable, of } from 'rxjs';
import { animes } from 'src/app/shared/mocks/anime.mock';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private animeList: Anime[] = [];

  constructor() {}

  public getAnimeList(): Observable<Anime[]> {
    this.animeList = JSON.parse(localStorage.getItem('animes') || '[]');
    return of(
      this.animeList.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      )
    );
  }
  public getAnime(id: string): Observable<Anime | undefined> {
    let anime = this.animeList.find((anime) => anime.id === id);
    return of(anime);
  }
  public addAnime(anime: Anime): Observable<Anime> {
    let list = [anime, ...this.animeList];
    localStorage.setItem('animes', JSON.stringify(list));
    return of(anime);
  }
  public deleteAnime(animeList: Anime[]): Observable<Anime[]> {
    localStorage.setItem('animes', JSON.stringify(animeList));
    return of(animeList);
  }
  public updateAnime(anime: Anime): Observable<Anime[]> {
    const updatedList = this.animeList.map((animeInList) => {
      if (animeInList.id === anime.id) {
        return {
          ...anime,
        };
      }
      return animeInList;
    });

    localStorage.setItem('animes', JSON.stringify(updatedList));
    return of(updatedList);
  }

  //Todo: Remove service.
  public saveMockAnimesToStorage() {
    localStorage.removeItem('animes');
    this.animeList = animes;
    localStorage.setItem('animes', JSON.stringify(this.animeList));
    return of(this.animeList);
  }
}
