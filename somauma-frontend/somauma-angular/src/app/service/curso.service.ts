import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getAllCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>('http://localhost:9000/curso')
  }

  getByIdCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`http://localhost:9000/curso/${id}`)
  }

  postCurso(Curso: Curso): Observable<Curso[]> {
    return this.http.post<Curso[]>('http://localhost:9000/curso', Curso)
  }


  getByNameCurso(title: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(`http://localhost:9000/curso/title/${title}`)
  }

  getByIdCursos(id: number){
    return this.http.get(`http://localhost:9000/curso/${id}`)

  }

  putCurso(Curso: Curso){
    return this.http.put<Curso>('http://localhost:9000/curso', Curso)
  }

  deleteCurso(id: number) {
    return this.http.delete(`http://localhost:9000/curso/${id}`)
  }
}
