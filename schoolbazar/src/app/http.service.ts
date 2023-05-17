import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // getUserLogged(){
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const options = { withCredentials: true, headers };
  //   return this.http.post('http://localhost:3000/getuser', {}, options);
  // }

  getPosts(filter: number){
    return this.http.get(`http://localhost:4000/post/getposts`)
  }
}
