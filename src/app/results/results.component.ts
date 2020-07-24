import { Component, OnInit } from '@angular/core';
import { Podcast } from '../models/Podcast';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  podcasts: Podcast[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => this.search(params.title, params.tag));
  }

  ngOnInit(): void {
  }

  search = (title: string, tag: string) => {
    let params = {};
    if (title) { params = { title }; }
    if (tag) { params = { tag }; }

    this.http
      .get<Podcast[]>('http://localhost:8080/podcasts/stars', {
        params,
      })
      .subscribe(podcasts => this.podcasts = podcasts);
  }
}
