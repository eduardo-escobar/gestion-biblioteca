import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: any[] = [];
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `http://localhost:3000/books${query}`;
    return this.http.get(url);
  }
  getAllBook = () => {
    return this.getQuery('/')
      .pipe(map(data => data['book']));
  }

  getTopBooks = () => {
    return this.getQuery('?top=8')
      .pipe(map(data => data['book']));
  }

  getBook = (idx: number) => {
    return this.getQuery(`/${idx}`)
      .pipe(map(data => data['data']));
  }

  getAllBookByName = (name: string) => {
    return this.getQuery(`/`)
      .pipe(map(data => data['data']));
  }
}

export interface Libro {
  idlibro: number;
  descripcion: string;
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
}