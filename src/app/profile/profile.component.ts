import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: Auth, private route: Router) {}
  session: any = {};
  user: String = '';
  ngOnInit(): void {
    this.session = this.auth?.session;
    this.user = this.session?.user?.email;
  }
  async logout() {
    await this.auth.signOut();
    window.location.href = '/';
  }
}
