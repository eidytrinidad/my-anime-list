import { Component, OnInit } from '@angular/core';
import { AnimeState } from 'src/app/core/constants/anime';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
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

  ngOnInit(): void {}

  public getAnimes() {
    return this.animes;
  }
}
