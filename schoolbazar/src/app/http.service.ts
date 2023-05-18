import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

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

  addPost(formData: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/post/addpost`, {name: formData.name, price: formData.price, description: formData.description, state: formData.state, grade: formData.grade, place: formData.place, image: formData.image}, options)
  }

  upload(formsData: any){
    const options = { withCredentials: true };
    return this.http.post('http://localhost:4000/cdn/upload', formsData, options)
  }

  getPost(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/post/getpost`, {id: id}, options)
  }

  getApprovalUsers() {
    const options = { withCredentials: true };
    return this.http.get(`http://localhost:4000/admin/getapprovals`, options)
  }

  approveUser(id: number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/admin/approve`, {id: id}, options)
  }

  deleteUser(id: number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/admin/delete`, {id: id}, options)
  }

  getApprovalsPost(){
    const options = { withCredentials: true };
    return this.http.get(`http://localhost:4000/admin/getpostapprovals`, options)
  }

  approvePost(id: number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/admin/approvepost`, {id: id}, options)
  }

  removePost(id: number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { withCredentials: true, headers };
    return this.http.post(`http://localhost:4000/admin/removepost`, {id: id}, options)
  }
}
