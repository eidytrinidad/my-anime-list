import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, HeaderComponent } from './components/';
import { RouterModule } from '@angular/router';

const declarations = [HeaderComponent, CardComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, RouterModule],
  exports: [...declarations],
})
export class SharedModule {}
