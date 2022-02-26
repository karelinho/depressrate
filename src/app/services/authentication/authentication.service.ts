import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IAuth } from 'src/app/login/login.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl_auth = 'https://depress-app.herokuapp.com/auth/';

  logged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) { }

  loginUser(authData: IAuth) {
    const body = JSON.stringify(authData);
    const header = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.httpClient.post(this.baseUrl_auth, body, {headers: header});
  }

  logout() {
    localStorage.removeItem('da-token');
    this.logged$.next(false);
    this.router.navigateByUrl("login");
  }

  isLogged(): boolean {
    const value = this.logged$.getValue();
    console.log(value);
    return value;
  }
}
