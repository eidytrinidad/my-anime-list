import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent, AddAnimeComponent } from './anime';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';

const declarations = [AnimeComponent, AddAnimeComponent];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [...declarations],
})
export class FeaturesModule {}
