import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return myHeaders;
  }

  public signIn(email: string, pwd: string): Observable<any> {
    //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
    const url = 'http://localhost:3000/signin'

    return this.http.post(url, {
        correo_electronico: email,
        contrasena: pwd,
      },
      { headers: this.headersREST() }
    ).pipe(
      map(response => {
        return response.json();
      }), pipe(catchError(this.handleError)))
  }
  /*
  autenticarService(data: string){
    console.log('Método en servicio' + data)
    
  }
  */
  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    // aqui hay un error Observable.throw is not a function
    return Observable.throw(json);
  }
}
