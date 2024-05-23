import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  /// login 
  private API_USERS= 'http://localhost:3000/login';
  postUsers(usuario: any): Observable<any>{
    return this.http.post(this.API_USERS, usuario)
  }
  //// user
  private API_USER2= 'http://localhost:3000/users';
  postUsers2(usuario:any): Observable<any>{
    return this.http.post(this.API_USER2, usuario)
  }
  getUsers():Observable <any>{
    return this.http.get(this.API_USER2)
  }
  putUsers(users: any):Observable<any>{
    return this.http.put(`${this.API_USER2}/${users.id}`,users)
      }
  getUsersID(id:any):Observable <any>{
    return this.http.get(`${this.API_USER2}/${id}`)
  }
  deleteUsersID(id: any):Observable<any>{
    return this.http.delete(`${this.API_USER2}/${id}`)
      }
      
  }
