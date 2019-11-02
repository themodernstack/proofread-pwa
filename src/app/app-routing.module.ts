import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';


export const routes: Routes = [
  {
      path: '',
      component:UserLayoutComponent,
      children: [
          {
              path: 'user',
              loadChildren: './user/user.module#UserModule'
          },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
