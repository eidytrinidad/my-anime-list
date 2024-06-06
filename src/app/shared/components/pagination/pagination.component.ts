import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalPages!: number;
  @Input() currentPageNumber!: number;
  @Output() handleChangePageEvent = new EventEmitter();

  public page: number = 1;
  public pageList: number[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    let { totalPages } = changes;

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
  public handleChangePageLeft() {
    if (this.page > 1) {
      this.page -= 1;

      this.handleChangePageEvent.emit(this.page);
    }
  }
  public handleChangePageRight() {
    if (this.page < this.totalPages) {
      this.page += 1;

      this.handleChangePageEvent.emit(this.page);
    }
  }
}
