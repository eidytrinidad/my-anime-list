import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() animeList: Anime[] = [];
  @Input() itemsPerPage: number = 0;
  @Output() handleChangePageEvent = new EventEmitter();
  public page: number = 1;
  public paginationItems: any;
  constructor() {}

  ngOnInit(): void {
    this.pagination();
  }
  public pagination() {
    this.paginationItems = this.animeList.slice(
      0,
      this.animeList.length <= this.itemsPerPage
        ? 1
        : Math.ceil(this.animeList.length / this.itemsPerPage)
    );
  }

  public handleChangePage(page: number) {
    this.page = page;
    this.handleChangePageEvent.emit(page);
  }
}
