import {Component} from '@angular/core';
import {User} from './model/user.interface';
import {UserService} from "./services/user/user.service";
import {EMPTY, Observable, of} from "rxjs";

@Component({
  selector: 'news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';

  user$: Observable<User | null> = of(null);

  constructor(private readonly userService: UserService) {
  }

  onLoginClicked() {
    this.user$ = this.userService.getUser();
  }

}
