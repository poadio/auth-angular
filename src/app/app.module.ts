import { AuthGuardService } from './../services/auth.guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
