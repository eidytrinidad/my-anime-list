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
  public isAnimeActive: boolean = true;
  public page = 1;

  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAnimeList();
    this.getAnimesByState();
  }

  public getAnimesByState() {
    this.route.queryParams.subscribe(({ showdisable }) => {
      this.page = 1;
      if (showdisable) {
        this.isAnimeActive = false;

        this.getInactiveAnimes();
        return;
      }
      this.isAnimeActive = true;
      this.getActiveAnimes();
    });
  }

  public getAnimeList() {
    let animeListData: Anime[] = [];
    this.animeService.getAnimeList().subscribe((animes) => {
      this.allAnimes = animes;
      animeListData = animes;
    });
    return animeListData;
  }

  public deleteAnime(id: string) {
    let animeList = this.allAnimes.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          state: AnimeState.INACTIVE,
        };
      }
      return anime;
    });
    this.page = 1;
    this.animeService.deleteAnime(animeList).subscribe(() => {
      this.getActiveAnimes();
    });
  }
  public updateAnime(id: string) {
    this.router.navigate([`/upate-anime/${id}`]);
  }

  public getInactiveAnimes() {
    let inactiveAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.INACTIVE
    );
    this.totalPages =
      inactiveAnimes.length < this.itemsPerPage
        ? 1
        : Math.ceil(inactiveAnimes.length / this.itemsPerPage);

    return (this.animeList = inactiveAnimes.slice(
      this.page * this.itemsPerPage - this.itemsPerPage,
      this.page * this.itemsPerPage
    ));
  }
  public getActiveAnimes() {
    let activeAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.ACTIVE
    );

    this.totalPages =
      activeAnimes.length < this.itemsPerPage
        ? 1
        : Math.ceil(activeAnimes.length / this.itemsPerPage);

    return (this.animeList = activeAnimes.slice(
      this.page * this.itemsPerPage - this.itemsPerPage,
      this.page * this.itemsPerPage
    ));
  }

  public handleChangePage(selectedPage: number) {
    this.page = selectedPage;
    if (!this.isAnimeActive) {
      return this.getInactiveAnimes();
    }
    return this.getActiveAnimes();
  }
}
