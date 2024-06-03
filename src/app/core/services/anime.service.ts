import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.interface';
import { AnimeState } from '../constants/anime';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  public animes: Anime[] = [
    {
      id: 1,
      imgUrl:
        'https://bananaroad.com/cdn/shop/products/pst2128_Bleach_Poster_grande.jpg?v=1621363373',
      title: 'bleach',
      state: AnimeState.ENABLE,
      genres: 'aventura,sobrenatural',
    },
    {
      id: 2,
      imgUrl: 'https://i.ebayimg.com/images/g/k00AAOSwM4FjBfDs/s-l1200.webp',
      title: 'One Piece',
      state: AnimeState.ENABLE,
      genres: 'aventura,fantasia,comedia,piratas',
    },
  ];

  constructor() {}

  public getAnimeList(): Observable<Anime[]> {
    const Animes = of(this.animes);
    return Animes;
  }
  public addAnime(): Observable<Anime[]> {
    const Animes = of(this.animes);
    return Animes;
  }
}
