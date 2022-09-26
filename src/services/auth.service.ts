import { Injectable } from "@angular/core";
import {
  AuthChangeEvent,
  createClient,
  Session,
  OmneediaClient
} from "@omneedia/client-js";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class Auth {
  private omneedia: OmneediaClient;

  constructor() {
    this.omneedia = createClient(
      environment.omneedia_url,
      environment.omneedia_key
    );
  }

  get session(): Session | null {
    return this.omneedia.auth.session();
  }

  public authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.omneedia.auth.onAuthStateChange(callback);
  }

  signIn(email: string, password: string) {
    return this.omneedia.auth.signIn({ email, password });
  }

  signInWithMagicLink(email: string) {
    return this.omneedia.auth.signIn({ email });
  }

  signInWithFacebook() {
    return this.omneedia.auth.signIn({ provider: "facebook" });
  }

  signInWithTwitter() {
    return this.omneedia.auth.signIn({ provider: "twitter" });
  }

  signInWithGoogle() {
    return this.omneedia.auth.signIn({ provider: "google" });
  }

  signInWithGithub() {
    return this.omneedia.auth.signIn({ provider: "github" });
  }

  signOut() {
    return this.omneedia.auth.signOut();
  }
}
