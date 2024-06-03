import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimeComponent, AnimeComponent } from './features/anime';

const routes: Routes = [
  {
    path: '',
    component: AnimeComponent,
  },
  {
    path: 'add-anime',
    component: AddAnimeComponent,
  },
  {
    path: 'upate-anime/:id',
    component: AddAnimeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
