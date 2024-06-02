import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, HeaderComponent, FormComponent } from './components/';
import { ReactiveFormsModule } from '@angular/forms';

const declarations = [HeaderComponent, CardComponent, FormComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [...declarations],
})
export class SharedModule {}
