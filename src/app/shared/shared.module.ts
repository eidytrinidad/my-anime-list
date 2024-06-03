import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, HeaderComponent, FormComponent } from './components/';
import { RouterModule } from '@angular/router';

const declarations = [HeaderComponent, CardComponent, FormComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, RouterModule],
  exports: [...declarations],
})
export class SharedModule {}
