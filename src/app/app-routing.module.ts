import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { DocumentLayoutComponent } from './layouts/document-layout/document-layout.component';
import { redirectUnauthorizedTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/user/login']);
export const routes: Routes = [
  {
    path: '',
    component: DocumentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './document/document.module#DocumentModule'
      },
    ],
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }

  },
  {
    path: '',
    component: UserLayoutComponent,
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
