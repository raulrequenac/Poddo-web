import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;

  @Output()
  userOut: EventEmitter<User> = new EventEmitter<User>();
  user: User;

  auth = this.cookieService.get('auth');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {  }

  ngOnInit(): void {
    if (this.auth) {
      this.http
        .get<User>('http://localhost:8080/users/is-user', this.httpOptions)
        .subscribe((user) => {
          this.user = user;
          this.userOut.emit(user);
        });
    }
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  logout = () => {
    this.cookieService.delete('auth');
    this.router.navigate(['/login']);
  }
}
