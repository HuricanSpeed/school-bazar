import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {


  constructor(private http: HttpService, private router: Router){}

  userData: any

  formData = {
    name: '',
    price: '',
    description: '',
    state: 0,
    grade: 0,
    username: '',
    place: 0,
    subject: '',
    image: ''
  }

  errorMessage: string = ''

  ngOnInit(): void {
    this.checkUser()
  }

  selectedFile: any;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  checkUser() {
    this.http.getUser().subscribe((response) => {
      this.userData = response
      this.userData = this.userData.data
    }, (error) => {
      this.router.navigate(['/'])
    })
  }


  uploadResponse: any
  submitForm(){
    if (this.selectedFile) {
      const formsData = new FormData();
      formsData.append('image', this.selectedFile);
      
      this.http.upload(formsData).subscribe(uploadResponse => {
        this.uploadResponse = uploadResponse
        this.formData.image = this.uploadResponse.imageName
        this.http.addPost(this.formData).subscribe((response) => {
          this.errorMessage = "Post have been created"
          this.router.navigate(['/'])
        }, (error) => {
          console.log(error)
          this.errorMessage = error.error.message
        })
      })

    }

  }
}
