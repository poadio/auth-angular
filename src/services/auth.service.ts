import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  Session,
  OmneediaClient,
} from '@omneedia/client-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
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

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    console.log(this.session);
    return this.omneedia.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.omneedia.auth.signIn({ email });
  }

  signInWithMagicLink(email: string) {
    return this.omneedia.auth.signIn({ email });
  }

  signOut() {
    return this.omneedia.auth.signOut();
  }
}
