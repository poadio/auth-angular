import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: Auth) {}

  ngOnInit(): void {}
  async logout() {
    await this.auth.signOut();
    window.location.href = '/';
  }
}
