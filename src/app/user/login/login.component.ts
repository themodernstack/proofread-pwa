import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private loginForm: FormGroup;
  private errors: string[] = [];

  constructor(public afAuth: AngularFireAuth, private _formBuilder: FormBuilder,private _snackBar: MatSnackBar ) {
    this.loginForm = _formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.email ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  loginGoogle() {
    this.errors=[];
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {

    }).catch((error) => {
        this.errors.push(error);
    });
  }
  
  loginEmail(){
    this.errors=[];
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value,this.password.value).then((result) => {

    }).catch((error) => {
        this.errors.push(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get valid(){
    return this.loginForm.valid;
  }

  get email():AbstractControl{
    return this.loginForm.controls['email'];
  }

  get password():AbstractControl{
    return this.loginForm.controls['password'];
  }

}
