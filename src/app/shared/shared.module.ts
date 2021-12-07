import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FieldValidatorPipe } from "./pipes/field-validator.pipe";

const pipes = [FieldValidatorPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  exports: [...pipes]
})
export class SharedModule {}
