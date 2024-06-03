import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() animeList: Anime[] = [];
  @Input() itemsPerPage: number = 0;

  public paginationItems: any;
  constructor() {}

  ngOnInit(): void {
    this.pagination();
  }
  public pagination() {
    this.paginationItems = this.animeList.slice(
      0,
      this.animeList.length < 5 ? 1 : this.animeList.length / this.itemsPerPage
    );
  }
}
