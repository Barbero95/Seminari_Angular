import { Injectable }from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {User} from './user';
import {Object} from "./object";
import {Login} from "./login";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({providedIn: 'root'})
export class UsersService {

  private usersUrl: string = 'http://localhost:8080/myapp/json/consultarUsuarioDAO';
  private objUrl: string = 'http://localhost:8080/myapp/json/consultarObjetoDAO';
  private loginUrl: string = 'http://localhost:8080/myapp/json/login';
  constructor (private http: HttpClient) {}

  getUser(name: string): Observable<User> {
    const url = `${this.usersUrl}/${name}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`The name=${name}`)),
      catchError(this.handleError<User>(`error`))
    );
  }
  getObj(id: number): Observable<Object> {
    const url = `${this.objUrl}/${id}`;
    return this.http.get<Object>(url).pipe(
      tap(_ => this.log(`The Object id=${id}`)),
      catchError(this.handleError<Object>(`error`))
    );
  }
  postLogin (login: Login): Observable<Login>{
    return this.http.post<Login>(this.loginUrl, login, httpOptions).pipe(
      tap((login: Login) => this.log(`login respuesta`)),
      catchError(this.handleError<Login>('Login incorrect'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log('UserService: ' + message);
  }

}