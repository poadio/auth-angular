import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Auth],
})
export class LoginComponent implements OnInit {
  @ViewChildren('display_password') display_password!: QueryList<
    ElementRef<HTMLElement>
  >;
  email: string = '';
  password: string = '';

  constructor(private readonly auth: Auth) {}

  ngOnInit(): void {}

  async signInWithPassword() {
    this.display_password.first.nativeElement.classList.remove('hidden');
    if (this.password != '') {
      const { user, error } = await this.auth.signIn(this.email, this.password);
      if (user) location.href = '/';
      if (error) alert(error.message);
    }
  }
  async signInWithMagicLink() {
    this.display_password.first.nativeElement.classList.add('hidden');
    const { user, error } = await this.auth.signInWithMagicLink(this.email);
    if (error) alert(error.message);
    else alert('Mail has been sent.');
  }
  signInWithFacebook() {}
  signInWithTwitter() {}
  signInWithGoogle() {}
  signInWithGithub() {}
}
