import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http :HttpClient) { }
  API_LIBROS ='http://localhost:3000/libros'
  getLibros():Observable <any>{
    return this.http.get(this.API_LIBROS)
  }
  getLibrosID(id:any):Observable <any>{
    return this.http.get(`${this.API_LIBROS}/${id}`)
  }
  getRol(rol:any):Observable<any>{
    return this.http.get(this.API_LIBROS,rol)
  }
  postLibros(libros: JSON):Observable<any>{
    return this.http.post(this.API_LIBROS, libros)
  }
  deleteLibrosID(id: any):Observable<any>{
    return this.http.delete(`${this.API_LIBROS}/${id}`)
      }
  putLibros(persona: any):Observable<any>{
    return this.http.put(`${this.API_LIBROS}/${persona.id}`,persona)
      }
      
}
