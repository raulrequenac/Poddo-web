import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tags } from '../constants/Tags';
import { podcastStatus } from '../constants/PodcastStatus';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Podcast } from '../models/Podcast';
import { PodcastDto } from '../dto/PodcastDto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  user: User;
  tags: string[] = tags;
  status: string[] = podcastStatus;


  httpOptionsCookie = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth'),
    }),
  };
  httpOptionsCookieFile = {
    headers: new HttpHeaders({
      Authorization: this.cookieService.get('auth')
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
    this.uploadForm = this.formBuilder.group({
      tags: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      allowComments: ['', Validators.required],
      audio: ['', Validators.required],
    });
  }

  updateUser = (user) => (this.user = user);

  onFileChange = function ($event) {
    const file = $event.target.files[0];
    this.uploadForm.controls.audio.setValue(file);
  };

  submitForm = () => {
    const podcastDto: PodcastDto = new PodcastDto(
      this.uploadForm.controls.tags.value,
      this.uploadForm.controls.title.value,
      this.uploadForm.controls.description.value,
      this.uploadForm.controls.status.value,
      this.uploadForm.controls.allowComments.value,
      this.user.id
    );
    const formData = new FormData();
    formData.append('file', this.uploadForm.controls.audio.value);
    this.http
      .post<Podcast>(
        'http://localhost:8080/podcasts/' + this.user.id,
        podcastDto,
        this.httpOptionsCookie
      )
      .subscribe(podcast => {
        this.http
          .post<Podcast>(
            'http://localhost:8080/podcasts/' + podcast.id + '/upload',
            formData,
            this.httpOptionsCookieFile,
          )
          .subscribe(p => this.router.navigate(['/'], { relativeTo: this.route }));
      });
  }
}
