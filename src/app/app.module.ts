import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './providers/auth.service';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertComponent } from './alert/alert.component';

export const firebaseConfig = {
  apiKey: "AIzaSyB7M9Hr9eP6FC1E5KKSAKsMKFLO-ZC8Haw",
  authDomain: "lanio-c8ab2.firebaseapp.com",
  databaseURL: "https://lanio-c8ab2.firebaseio.com",
  storageBucket: "lanio-c8ab2.appspot.com",
  messagingSenderId: "836341375232"
}

// The Routes
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { // 404 page
    path: '404',
    component: NotFoundComponent
  },
  { // 404 catch all - redirects to 404 page
    path: '**',
    redirectTo: '/404'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    LoginFormComponent,
    NotFoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
