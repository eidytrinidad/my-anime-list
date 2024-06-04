import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeState } from 'src/app/core/constants/anime';
import { Anime } from 'src/app/core/models/anime.interface';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  public animeList: Anime[] = [];
  public totalPages: number = 0;
  public itemsPerPage = 5;
  public page = 1;
  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAnimesByState();
  }

  public getAnimesByState() {
    let disabledAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.DISABLE
    );
    let enabledAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.ENABLE
    );
    this.route.queryParams.subscribe(({ showdisable }) => {
      if (showdisable) {
        return this.disabledAnimes();
      }
      this.totalPages =
        enabledAnimes.length < this.itemsPerPage
          ? 1
          : Math.ceil(enabledAnimes.length / this.itemsPerPage);
      return (this.animeList = enabledAnimes.slice(
        this.page * this.itemsPerPage - this.itemsPerPage,
        this.page * this.itemsPerPage
      ));
    });
  }

  public getAnimeList() {
    let animeListData: Anime[] = [];
    this.animeService.getAnimeList().subscribe((animes) => {
      animeListData = animes;
    });
    return animeListData;
  }

  public deleteAnime(id: string) {
    let animeList = this.animeList.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          state: AnimeState.DISABLE,
        };
      }
      return anime;
    });

    this.animeService.deleteAnime(animeList).subscribe(() => {
      this.getAnimesByState();
    });
  }
  public updateAnime(id: string) {
    this.router.navigate([`/upate-anime/${id}`]);
  }

  public disabledAnimes() {
    this.animeService.getAnimeList().subscribe((animes) => {
      this.animeList = animes.filter(
        (anime) => anime.state === AnimeState.DISABLE
      );
    });
  }

  public handleChangePage(selectedPage: number) {
    this.page = selectedPage;
    this.getAnimesByState();
  }
}
