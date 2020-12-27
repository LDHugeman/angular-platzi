import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./routes/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./routes/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./routes/contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
    ],
  },
  {
    path: 'demo',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./routes/demo/demo.module').then((module) => module.DemoModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./routes/page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
