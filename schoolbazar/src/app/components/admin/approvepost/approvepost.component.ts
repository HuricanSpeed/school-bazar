import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-approvepost',
  templateUrl: './approvepost.component.html',
  styleUrls: ['./approvepost.component.scss']
})
export class ApprovepostComponent implements OnInit{

  approvals: any

  subjects = ['Matematika', 'Čeština', 'Němčina', 'Fyzika', 'Angličtina', 'Elektrotechnika', 'Databáze', 'Technické vybavení', 'Ostatní'];

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.getApprovalsPost()
  }

  getApprovalsPost(){
    this.http.getApprovalsPost().subscribe((response) => {
      this.approvals = response
    }, (error) => {
    })
  }

  approvePost(id: number){
    this.http.approvePost(id).subscribe((response) => {
      location.reload()
    }, (error) => {})
  }

  removePost(id: number){
    this.http.removePost(id).subscribe((response) => {
      location.reload()
    }, (error) => {})
  }
}
