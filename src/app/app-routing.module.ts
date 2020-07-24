import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { ListenComponent } from './listen/listen.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { SigninComponent } from './signin/signin.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }, {
    path: 'results',
    component: ResultsComponent
  }, {
    path: 'listen/:id',
    component: ListenComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'upload',
    component: UploadComponent
  }, {
    path: 'signin',
    component: SigninComponent
  }, {
    path: 'channel/:id',
    component: ChannelComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
