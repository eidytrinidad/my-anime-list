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
    },
    {
      id: 2,
      imgUrl: 'https://i.ebayimg.com/images/g/k00AAOSwM4FjBfDs/s-l1200.webp',
      title: 'One Piece',
      state: AnimeState.ENABLE,
    },
  ];

  constructor() {}

  public getAnimes(): Observable<Anime[]> {
    const Animes = of(this.animes);
    return Animes;
  }
}
