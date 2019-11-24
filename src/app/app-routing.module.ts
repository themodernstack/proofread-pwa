import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { DocumentLayoutComponent } from './layouts/document-layout/document-layout.component';


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
  {
    path: '',
    component:DocumentLayoutComponent,
    children: [
        {
          path: 'document',
          loadChildren: './document/document.module#DocumentModule'
        },
    ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
