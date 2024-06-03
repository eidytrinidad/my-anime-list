import { Component, OnInit } from '@angular/core';
import { AnimeState } from 'src/app/core/constants/anime';
import { Anime } from 'src/app/core/models/anime.interface';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  public animes: Anime[] = [];
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAnimeList();
  }

  public getAnimeList() {
    this.animeService.getAnimeList().subscribe((animes) => {
      this.animes = animes;
      // this.animes = animes.filter(
      //   (anime) => anime.state !== AnimeState.DISABLE
      // );
    });
  }

  public deleteAnime(id: string) {
    let animeList = this.animes.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          state: AnimeState.DISABLE,
        };
      }
      return anime;
    });

    this.animeService.deleteAnime(animeList).subscribe();
  }
}
