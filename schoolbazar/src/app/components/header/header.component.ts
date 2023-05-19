import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faArrowRightFromBracket = faArrowRightFromBracket

  constructor(private http: HttpService, private router: Router){}

  userData: any

  notLogged: boolean = false
  
  ngOnInit(): void {
    if(!this.userData){
      this.checkUser()
    }
  }

  checkUser() {
    this.http.getUser().subscribe((response) => {
      this.userData = response
      this.userData = this.userData.data
    }, (error) => {})
  }

  logout(){
    this.http.logout().subscribe((response) =>{}, (error) => {})
    delete this.userData 
    this.router.navigate(['/'])
  }
}
