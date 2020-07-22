import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit(): void {}

  updateUser = (user) => (this.user = user);
}
