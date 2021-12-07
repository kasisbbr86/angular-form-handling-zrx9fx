import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { AutosaveComponent } from "./autosave.component";

const routes: Route[] = [
  {
    path: "",
    component: AutosaveComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AutosaveRoutingModule {}
