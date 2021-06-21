import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorGuard} from "./guards/editor.guard";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('../features/news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'editor',
    canLoad: [
      EditorGuard
    ],
    loadChildren: () => import('../features/editor/editor.module').then(m => m.EditorModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
