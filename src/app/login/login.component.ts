import {
  Component,
  OnInit,
  ViewChild,
  QueryList,
  ElementRef
} from "@angular/core";

import { Auth } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [Auth]
})
export class LoginComponent implements OnInit {
  @ViewChild("display_password", { static: false }) display_password: any;
  email: string = "";
  password: string = "";

  constructor(private readonly auth: Auth) {}

  ngOnInit(): void {}

  async signInWithPassword() {
    this.display_password.nativeElement.classList.remove("hidden");
    if (this.password !== "") {
      const { user, error } = await this.auth.signIn(this.email, this.password);
      if (user) window.location.href = "/";
      if (error) alert(error.message);
    }
  }
  async signInWithMagicLink() {
    this.display_password.nativeElement.classList.add("hidden");
    const { user, error } = await this.auth.signInWithMagicLink(this.email);
    if (error) alert(error.message);
    else alert("Mail has been sent.");
  }
  async signInWithFacebook() {
    const { user, session, error } = await this.auth.signInWithFacebook();
    if (error) alert(error.message);
  }
  async signInWithTwitter() {
    const { user, session, error } = await this.auth.signInWithTwitter();
    if (error) alert(error.message);
  }
  async signInWithGoogle() {
    const { user, session, error } = await this.auth.signInWithGoogle();
    if (error) alert(error.message);
  }
  async signInWithGithub() {
    const { user, session, error } = await this.auth.signInWithGithub();
    if (error) alert(error.message);
  }
}
