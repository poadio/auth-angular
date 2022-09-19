import {
  Component,
  OnInit,
  Renderer2,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChildren('password') password: QueryList<ElementRef<HTMLElement>>;
  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {}

  signInWithPassword() {
    alert('x');
  }
}
