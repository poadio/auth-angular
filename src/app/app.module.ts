import { AuthGuardService } from './../services/auth.guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
