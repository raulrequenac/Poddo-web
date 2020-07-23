import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChannelUserDto } from '../dto/ChannelUserDto';
import { User } from '../models/User';
import { Channel } from '../models/Channel';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      logo: ['', Validators.required],
    });
  }

  onFileChange = function ($event) {
    const file = $event.target.files[0];
    this.signInForm.controls.logo.setValue(file);
  };

  submitForm = () => {
    const channelUserDto: ChannelUserDto = new ChannelUserDto(
      this.signInForm.controls.name.value,
      this.signInForm.controls.username.value,
      this.signInForm.controls.password.value,
    );
    const formData = new FormData();
    formData.append('file', this.signInForm.controls.logo.value);
    this.http
      .post<User>(
        'http://localhost:8080/users/user',
        channelUserDto
      )
      .subscribe(user => {
        this.http
          .post<Channel>(
            'http://localhost:8080/channels/' + user.id + '/update',
            formData
          )
          .subscribe(channel => this.router.navigate(['/login'], { relativeTo: this.route }));
      });
  }
}
