import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-approvepost',
  templateUrl: './approvepost.component.html',
  styleUrls: ['./approvepost.component.scss']
})
export class ApprovepostComponent implements OnInit{

  approvals: any

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.getApprovalsPost()
  }

  getApprovalsPost(){
    this.http.getApprovalsPost().subscribe((response) => {
      this.approvals = response
      console.log(this.approvals)
    }, (error) => {
      console.log(error)
    })
  }

  approvePost(id: number){
    this.http.approvePost(id).subscribe((response) => {
    }, (error) => {})
  }

  removePost(id: number){
    this.http.removePost(id).subscribe((response) => {
    }, (error) => {})
  }
}
