import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  @Input() animes: Anime[] = [];
  constructor() {}

  ngOnInit(): void {}
}
