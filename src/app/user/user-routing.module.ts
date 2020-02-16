import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';

const redirectLoggedInToDocuments = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/user/login']);

const routes: Routes = [
  {
      path: '',
      data: {
          title: 'User'
      },
      children: [
          {
              path: 'login',
              component:LoginComponent,
              data: {
                  title: 'Login',
                  authGuardPipe: redirectLoggedInToDocuments 
              },
              canActivate: [AngularFireAuthGuard],
            
          },
          {
              path: 'register',
              component: RegisterComponent,
              data: {
                  title: 'Register',
                  authGuardPipe: redirectLoggedInToDocuments,
              },
              canActivate: [AngularFireAuthGuard],
          },
          {
            path: 'logout',
            component: LoginComponent,
            data: {
                title: 'Logout',
                authGuardPipe: redirectUnauthorizedToLogin,
            },
            canActivate: [AngularFireAuthGuard],
          },
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
