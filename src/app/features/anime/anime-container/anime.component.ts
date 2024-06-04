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
  public filteredAnimeList: Anime[] = [];
  public itemsPerPage = 1;
  public page = 1;
  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ showdisable }) => {
      if (showdisable) {
        return this.disabledAnimes();
      }
      return this.getAnimeList();
    });
  }

  public getAnimeList() {
    this.animeService.getAnimeList().subscribe((animes) => {
      this.animeList = animes.filter(
        (anime) => anime.state !== AnimeState.DISABLE
      );
      this.pagination();
    });
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
      this.getAnimeList();
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

  public pagination() {
    this.filteredAnimeList = this.animeList?.slice(
      this.page * this.itemsPerPage - this.itemsPerPage,
      this.page * this.itemsPerPage
    );
  }

  public handleChangePage(selectedPage: number) {
    this.page = selectedPage;
    this.getAnimeList();
  }
}
