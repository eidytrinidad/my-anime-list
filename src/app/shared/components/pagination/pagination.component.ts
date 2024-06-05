import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalPages!: number;
  @Input() itemsPerPage!: number;
  @Input() currentPageNumber!: number;
  @Input() isAnimeEnable!: boolean;
  @Output() handleChangePageEvent = new EventEmitter();
  public page: number = 1;
  public pageList: number[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    let { totalPages, currentPageNumber } = changes;

    if (totalPages?.currentValue !== undefined) {
      this.pagination();
    }
    if (totalPages?.currentValue < totalPages?.previousValue) {
      this.page = 1;
      this.pagination();
    }
  }

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
