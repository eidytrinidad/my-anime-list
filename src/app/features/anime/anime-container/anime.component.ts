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
  public allAnimes: Anime[] = [];
  public totalPages: number = 0;
  public itemsPerPage = 5;
  public isAnimeEnable: boolean = true;
  public page = 1;

  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allAnimes = this.getAnimeList();
    this.getAnimesByState();
  }

  public getAnimesByState() {
    this.route.queryParams.subscribe(({ showdisable }) => {
      this.page = 1;
      if (showdisable) {
        this.isAnimeEnable = false;

        this.getDisabledAnimes();
        return;
      }
      this.isAnimeEnable = true;
      this.getEnabledAnimes();
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
    let animeList = this.allAnimes.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          state: AnimeState.DISABLE,
        };
      }
      return anime;
    });
    this.page = 1;
    this.animeService.deleteAnime(animeList).subscribe(() => {
      this.getEnabledAnimes();
    });
  }
  public updateAnime(id: string) {
    this.router.navigate([`/upate-anime/${id}`]);
  }

  public getDisabledAnimes() {
    let disabledAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.DISABLE
    );
    this.totalPages =
      disabledAnimes.length < this.itemsPerPage
        ? 1
        : Math.ceil(disabledAnimes.length / this.itemsPerPage);

    return (this.animeList = disabledAnimes.slice(
      this.page * this.itemsPerPage - this.itemsPerPage,
      this.page * this.itemsPerPage
    ));
  }
  public getEnabledAnimes() {
    let enabledAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.ENABLE
    );

    this.totalPages =
      enabledAnimes.length < this.itemsPerPage
        ? 1
        : Math.ceil(enabledAnimes.length / this.itemsPerPage);

    return (this.animeList = enabledAnimes.slice(
      this.page * this.itemsPerPage - this.itemsPerPage,
      this.page * this.itemsPerPage
    ));
  }

  public handleChangePage(selectedPage: number) {
    this.page = selectedPage;
    if (!this.isAnimeEnable) {
      return this.getDisabledAnimes();
    }
    return this.getEnabledAnimes();
  }
}
