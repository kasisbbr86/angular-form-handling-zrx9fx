import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AsyncComponent } from "./async.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AsyncRoutingModule } from "./async-routing.module";

@NgModule({
  imports: [CommonModule, AsyncRoutingModule, ReactiveFormsModule],
  declarations: [AsyncComponent]
})
export class AsyncModule {}
