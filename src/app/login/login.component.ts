import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Subscriber, Subscription } from 'rxjs';

export interface IAuth {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', Validators.required)
  });

  loading = false;

  loginSubs: Subscription = new Subscription();

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loading = true;
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    this.loginSubs = this.authenticationService.loginUser({
      username: username,
      password: password
    }).subscribe((result: any) => {
      this.loading = false;
      localStorage.setItem("da-token", result.token);
      this.authenticationService.logged$.next(true);
      this.router.navigateByUrl("home");
    },() => {
      this.loading = false;
      this.loginForm.get('password')?.setErrors({ invalidform: true });
      this.loginForm.get('username')?.markAsTouched();
    });
  }

  ngOnDestroy(): void {
    this.loginSubs.unsubscribe();
  }
}
