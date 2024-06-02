import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, HeaderComponent } from './components/';

const declarations = [HeaderComponent, CardComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class SharedModule {}
