import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { AsyncComponent } from "./async.component";

const routes: Route[] = [
  {
    path: "",
    component: AsyncComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AsyncRoutingModule {}
