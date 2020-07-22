import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Podcast } from '../models/Podcast';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {
  podcastId: string;
  podcast: Podcast;
  stars: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.podcastId = params.id);
    this.http.get<Podcast>('http://localhost:8080/podcasts/' + this.podcastId)
      .subscribe(podcast => {
        this.podcast = podcast;
        this.stars = podcast.stars;
      });
  }

  starPodcast = () => {
    this.http.post<Podcast>('http://localhost:8080/podcasts/' + this.podcastId + '/star', {})
      .subscribe(podcast => this.stars = podcast.stars);
  }

  starComment = () => {
    this.http.post<Comment>('http://localhost:8080/', {}).subscribe
  } 
}
