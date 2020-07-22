import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Podcast } from '../models/Podcast';
import { tags } from '../constants/Tags';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags: string[] = tags;

  podcasts: Podcast[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Podcast[]>('http://localhost:8080/podcasts')
      .subscribe(podcasts => this.podcasts = podcasts);
  }

}
