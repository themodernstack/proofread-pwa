import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  private registerForm: FormGroup;
  private errors: string[] = [];

  constructor(public afAuth: AngularFireAuth, private _formBuilder: FormBuilder, ) {
    this.registerForm = _formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.email ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }
  
  register() {
    this.errors=[];
    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value,this.password.value).then((result) => {

    }).catch((error) => {
        this.errors.push(error);
    });;
  }

  get valid(){
    return this.registerForm.valid;
  }

  get email():AbstractControl{
    return this.registerForm.controls['email'];
  }

  get password():AbstractControl{
    return this.registerForm.controls['password'];
  }

}
