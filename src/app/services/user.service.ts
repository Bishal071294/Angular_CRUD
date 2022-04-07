import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class userService {
 baseurl: string= 'https://jsonplaceholder.typicode.com/';
  constructor(private http : HttpClient) { }

  listuser(){
    return this.http.get(this.baseurl + 'users');
  }
  viewuser(id: string){
    return this.http.get(this.baseurl + 'users/' + id);
  }
 
}
