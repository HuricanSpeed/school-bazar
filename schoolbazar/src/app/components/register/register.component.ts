import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private http: HttpService, private router: Router){}

  formData = {
    username: '',
    email: '',
    telnumber: '',
    password: '',
    repeatpassword: '',
    passwordCheck: false
  };

  errorMessage: string = ""

  checkPassword(x:any){
    if(this.formData.password == x.target.value){
      this.formData.passwordCheck = true
    }
  }
  
  submitForm(){
    if(this.formData.passwordCheck){
      this.http.register(this.formData).subscribe((response) => {
        this.router.navigate(['/'])
      }, (error) => {
        this.errorMessage = error.error.message
      })
    }
  }
}
