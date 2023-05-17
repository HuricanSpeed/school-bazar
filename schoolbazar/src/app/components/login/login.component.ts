import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from "@angular/router"
import { Location } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpService, private router: Router, private location: Location){}

  formData = {
    username: '',
    password: ''
  }

  errorMessage: string = "";

  submitForm(){
    this.http.login(this.formData).subscribe((response) => {
      this.location.go('/');
      location.reload()
    }, (error) => {
      console.log(error)
      this.errorMessage = error.error.message
    })
  }
}
