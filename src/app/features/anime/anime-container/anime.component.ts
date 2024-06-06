import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeState } from 'src/app/core/constants/anime';
import { Anime } from 'src/app/core/models/anime.interface';
import { AnimeService } from 'src/app/core/services/anime.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

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
    private route: ActivatedRoute,
    private sweetAlert: NotificationsService
  ) {}

  ngOnInit(): void {
    this.getAnimeList();
    this.getAnimesByState();
    //this.animeService.saveMockAnimesToStorage().subscribe();
  }

  public getAnimesByState() {
    this.route.url.subscribe((event) => {
      this.page = 1;

      if (event[0]?.path !== undefined) {
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

  public async deleteAnime(id: string) {
    let animeList = this.allAnimes.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          state: AnimeState.INACTIVE,
        };
      }
      return anime;
    });
    let { isConfirmed } = await this.sweetAlert.swalNotification({
      title: 'Alerta',
      text: 'Esta seguro de querer eliminar este anime?',
      confirmText: 'Si, eliminar',
      icon: 'warning',
    });
    if (isConfirmed) {
      this.page = 1;
      this.animeService.deleteAnime(animeList).subscribe(() => {
        this.getActiveAnimes();
      });
      this.sweetAlert.swalNotification({
        title: 'Listo',
        text: 'Anime eliminado',
        showCancelButton: false,
        confirmText: 'Cerrar',
      });
    }
  }
  public updateAnime(id: string) {
    this.router.navigate([`/upate-anime/${id}`]);
  }

  public getInactiveAnimes() {
    let inactiveAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.INACTIVE
    );
    this.setAnimeTotalPagesAndSlice(inactiveAnimes);
  }
  public getActiveAnimes() {
    let activeAnimes = this.getAnimeList().filter(
      (anime) => anime.state === AnimeState.ACTIVE
    );
    this.setAnimeTotalPagesAndSlice(activeAnimes);
  }

  public setAnimeTotalPagesAndSlice(animes: Anime[]) {
    this.totalPages =
      animes.length < this.itemsPerPage
        ? 1
        : Math.ceil(animes.length / this.itemsPerPage);

    return (this.animeList = animes.slice(
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
