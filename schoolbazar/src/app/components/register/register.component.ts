import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { catchError } from 'rxjs/operators';

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

  errorMessage: string = ""

  submitForm(){
    this.http.register(this.formData).subscribe((response) => {
      
    }, (error) => {
      this.errorMessage = error.error.message
    })
  }
}
