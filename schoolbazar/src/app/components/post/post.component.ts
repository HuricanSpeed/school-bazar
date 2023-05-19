import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  
  constructor(private http: HttpService, private route: ActivatedRoute){}

  id: number = 0
  postData: any
  userData: any

  subjects = ['Matematika', 'Čeština', 'Němčina', 'Fyzika', 'Angličtina', 'Elektrotechnika', 'Databáze', 'Technické vybavení', 'Ostatní'];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadPost()
    this.checkUser()
  }

  loadPost(){
    this.http.getPost(this.id).subscribe((response: any) => {
      this.postData = response
      console.log(this.postData)
    }, (error) => {
      console.log(error)
    })
  }

  checkUser() {
		this.http.getUser().subscribe((response) => {
		  this.userData = response
		  this.userData = this.userData.data
		}, (error) => {})
	}

  removePost(id: number){
    this.http.removePost(id).subscribe((response) => {
    }, (error) => {})
  }
}
