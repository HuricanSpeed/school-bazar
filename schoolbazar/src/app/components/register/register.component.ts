import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private http: HttpService){}

  formData = {
    username: '',
    email: '',
    telnumber: '',
    password: ''
  };

  submitForm(){
    this.http.register(this.formData).subscribe(data => {
      console.log(data)
    })
  }
}
