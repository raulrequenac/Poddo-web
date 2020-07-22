import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth: string = this.cookieService.get('auth');

  httpOptionsCookie = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.auth) {
      this.http
        .get<boolean>(
          'http://localhost:8080/users/is-user',
          this.httpOptionsCookie
        )
        .subscribe((resp) => {
          if (resp) {
            this.router.navigate(['/'], { relativeTo: this.route });
          }
        });
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm = () => {
    const auth: string =
      'Basic ' +
      btoa(
        this.loginForm.controls.username.value +
          ':' +
          this.loginForm.controls.password.value
      );
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth,
      }),
    };
    this.http
      .get<boolean>('http://localhost:8080/users/is-user', httpOptions)
      .subscribe((resp) => {
        if (resp) {
          this.cookieService.set('auth', auth);
          this.router.navigate(['/'], { relativeTo: this.route });
        } else {
          this.loginForm.controls.username.setErrors({ incorrect: true });
          this.loginForm.controls.password.setErrors({ incorrect: true });
        }
      });
  };
}
