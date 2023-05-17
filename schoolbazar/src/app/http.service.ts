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

  getPosts(grade: any){
    return this.http.get(`http://localhost:4000/post/getposts`)
  }

  register(formData: any){
    return this.http.post(`http://localhost:4000/register`, {username: formData.username, email: formData.email, telnumber: formData.telnumber, password: formData.password})
  }

  login(formData: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/login`, {username: formData.username, password: formData.password}, options)
  }

  getUser() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.get(`http://localhost:4000/getUser`, options)
  }

  logout(){
    const options = { withCredentials: true };
    return this.http.get(`http://localhost:4000/logout`, options)
  }
}
