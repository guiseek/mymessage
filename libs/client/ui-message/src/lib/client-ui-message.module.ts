import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateForm } from './create/create.form';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateForm],
  exports: [CreateForm],
})
export class ClientUiMessageModule {}
