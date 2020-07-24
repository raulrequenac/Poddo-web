import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Podcast } from '../models/Podcast';
import { PodcastView } from '../viewModel/PodcastView';
import { CommentDto } from '../dto/CommentDto';
import { Comment } from '../models/Comment';
import { User } from '../models/User';
import { Channel } from '../models/Channel';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css'],
})
export class ListenComponent implements OnInit {
  channel: Channel;
  podcast: Podcast;
  stars: number;
  comments: Comment[] = [];
  user: User = null;
  gif = false;

  commentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => this.getPodcast(params.id));
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required],
      responseTo: ['', Validators.required],
    });
  }

  getPodcast = (id: string) => {
    this.http
      .get<Podcast>('http://localhost:8080/podcasts/' + id)
      .subscribe((podcast) => {
        this.podcast = podcast;
        this.stars = podcast.stars;
        this.comments = podcast.comments;
        this.http
          .get<Channel>('http://localhost:8080/channels/' + podcast.channelId)
          .subscribe((channel) => this.channel = channel);
      });
  }

  starPodcast = () => {
    this.http
      .post<Podcast>(
        'http://localhost:8080/podcasts/' + this.podcast.id + '/star',
        {}
      )
      .subscribe((podcast) => (this.stars = podcast.stars));
  }

  starComment = (id: number) => {
    this.http
      .post<Comment>('http://localhost:8080/comments/' + id + '/star', {})
      .subscribe((comment) =>
        this.comments.map((c) => {
          if (c.id === comment.id) {
            c.stars = comment.stars;
          }
        })
      );
  }

  submitForm = () => {
    if (!this.user) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }

    const comment: CommentDto = new CommentDto(
      this.user.id,
      this.commentForm.controls.text.value,
      this.commentForm.controls.responseTo.value || null
    );

    this.http
      .post<Podcast>(
        'http://localhost:8080/podcasts/' + this.podcast.id + '/comment',
        comment
      )
      .subscribe((podcast) => (this.comments = podcast.comments));
  }

  getUser = (user) => (this.user = user);

  subscribe = () => {
    
  }
}
