import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-approveuser',
  templateUrl: './approveuser.component.html',
  styleUrls: ['./approveuser.component.scss']
})
export class ApproveuserComponent implements OnInit{

  constructor(private http: HttpService){}
  approvals: any

  ngOnInit(): void {
    this.loadApprovals()
  }

  loadApprovals(){
    this.http.getApprovalUsers().subscribe((response) => {
      this.approvals = response
      console.log(this.approvals)
    }, (error) => {
    })
  }

  approve(id: number){
    this.http.approveUser(id).subscribe((reponse) => {
      location.reload()
    }, (error) => {
    })
  }

  delete(id: number){
    this.http.deleteUser(id).subscribe((reponse) => {
      location.reload()
    }, (error) => {
    })
  }
}
