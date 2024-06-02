import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() anime!: Anime;
  constructor() {}

  ngOnInit(): void {}
}
