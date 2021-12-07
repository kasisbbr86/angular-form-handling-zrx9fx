import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [{
  path: '',
  redirectTo: '/basic',
  pathMatch: 'full'
}, {
  path: 'basic',
  loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
}, {
  path: 'autosave',
  loadChildren: () => import('./autosave/autosave.module').then(m => m.AutosaveModule)
}, {
  path: 'async',
  loadChildren: () => import('./async/async.module').then(m => m.AsyncModule)
}];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
