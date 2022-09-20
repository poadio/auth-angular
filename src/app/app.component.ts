import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'auth';
  constructor(private router: Router, private readonly auth: Auth) {}
  user: any = {};
  session: any = {};
  ngOnInit(): void {
    var p = this;
    this.auth.authChanges(function (_, session) {
      p.session = session;
      p.user = session.user;
    });
  }

  login() {
    this.router.navigate(['/', 'login']);
  }

  signup() {
    this.router.navigate(['/', 'signup']);
  }

  go2profile() {
    this.router.navigate(['/', 'profile']);
  }
}
