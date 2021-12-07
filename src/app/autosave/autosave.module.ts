import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutosaveComponent } from "./autosave.component";
import { AutosaveRoutingModule } from "./autosave-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AutosaveRoutingModule, ReactiveFormsModule],
  declarations: [AutosaveComponent]
})
export class AutosaveModule {}
