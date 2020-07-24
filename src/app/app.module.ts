import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { ListenComponent } from './listen/listen.component';
import { LoginComponent } from './login/login.component';
import { NotLoggedComponent } from './not-logged/not-logged.component';
import { UploadComponent } from './upload/upload.component';
import { SigninComponent } from './signin/signin.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionsComponent,
    ProfileComponent,
    NavbarComponent,
    HeaderComponent,
    ResultsComponent,
    ListenComponent,
    LoginComponent,
    NotLoggedComponent,
    UploadComponent,
    SigninComponent,
    ChannelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
