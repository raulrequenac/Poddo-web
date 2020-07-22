import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-not-logged',
  templateUrl: './not-logged.component.html',
  styleUrls: ['./not-logged.component.css']
})
export class NotLoggedComponent implements OnInit {
  @Input()
  user: User;
  @Input()
  view: string;

  constructor() { }

  ngOnInit(): void {
  }

}
