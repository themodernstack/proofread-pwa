import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import { DocumentLayoutComponent } from './layouts/document-layout/document-layout.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    DocumentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatToolbarModule, 

  ],
  providers: [
    AngularFirestore,
    AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
