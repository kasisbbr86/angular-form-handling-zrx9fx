import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { BasicComponent } from "./basic.component";

const routes: Route[] = [
  {
    path: "",
    component: BasicComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BasicRoutingModule {}
