import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number = 0;
  @Input() itemsPerPage: number = 0;
  @Output() handleChangePageEvent = new EventEmitter();
  public page: number = 1;
  public pageList: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.pagination();
  }
  public pagination() {
    this.pageList = Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  public handleChangePage(page: number) {
    this.page = page;

    this.handleChangePageEvent.emit(page);
  }
}
