import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent, AnimeListComponent } from './anime';

const declarations = [AnimeComponent, AnimeListComponent];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class FeaturesModule {}
