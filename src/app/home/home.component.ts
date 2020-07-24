import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Podcast } from '../models/Podcast';
import { PodcastView } from '../viewModel/PodcastView';
import { tags } from '../constants/Tags';
import { Channel } from '../models/Channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags: string[] = tags;

  podcasts: PodcastView[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Podcast[]>('http://localhost:8080/podcasts')
      .subscribe(podcasts => {
        podcasts.map(podcast => {
          this.http.get<Channel>('http://localhost:8080/channels/' + podcast.channelId)
            .subscribe(channel => {
              const podcastView: PodcastView = new PodcastView(
                podcast.id,
                podcast.stars,
                podcast.tags,
                podcast.title,
                podcast.description,
                podcast.comments,
                podcast.status,
                podcast.audio,
                podcast.allowComments,
                podcast.creationDate,
                channel
              );
              this.podcasts.push(podcastView);
            });
        });
      });
  }
}
