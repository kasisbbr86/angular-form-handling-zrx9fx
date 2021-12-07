import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { BasicRoutingModule } from './basic-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BasicRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BasicComponent]
})
export class BasicModule { }