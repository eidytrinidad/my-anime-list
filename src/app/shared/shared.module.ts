import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  HeaderComponent,
  PaginationComponent,
  NavbarComponent,
} from './components/';
import { RouterModule } from '@angular/router';

const declarations = [
  HeaderComponent,
  CardComponent,
  PaginationComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, RouterModule],
  exports: [...declarations, RouterModule],
})
export class SharedModule {}
