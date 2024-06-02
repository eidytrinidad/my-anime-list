import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, HeaderComponent, FormComponent } from './components/';

const declarations = [HeaderComponent, CardComponent, FormComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class SharedModule {}
