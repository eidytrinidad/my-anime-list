import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent, AnimeListComponent } from './anime';
import { SharedModule } from '../shared/shared.module';

const declarations = [AnimeComponent, AnimeListComponent];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule,SharedModule],
  exports: [...declarations],
})
export class FeaturesModule {}
