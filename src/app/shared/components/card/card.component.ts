import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/core/models/anime.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() anime!: Anime;
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public delete(id: string) {
    this.deleteEvent.emit(id);
  }

  public update(id: string) {
    this.updateEvent.emit(id);
  }
}
