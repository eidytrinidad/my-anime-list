import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() animeList: Anime[] = [];

  constructor() {}

  ngOnInit(): void {}
}
