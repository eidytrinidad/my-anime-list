import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime/anime-container/anime.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';



@NgModule({
  declarations: [
    AnimeComponent,
    AnimeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
