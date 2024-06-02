import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent, AnimeListComponent } from './anime';
import { SharedModule } from '../shared/shared.module';
import { AddAnimeComponent } from './anime/add-anime/add-anime.component';

const declarations = [AnimeComponent, AnimeListComponent];
@NgModule({
  declarations: [...declarations, AddAnimeComponent],
  imports: [CommonModule,SharedModule],
  exports: [...declarations],
})
export class FeaturesModule {}
