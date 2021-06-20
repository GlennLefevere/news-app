import {Component} from '@angular/core';
import {User} from './model/user.interface';
import {UserService} from "./services/user/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';

  user$: Observable<User | null> = this.userService.getUser();

  constructor(private readonly userService: UserService) {
  }

  onLoginClicked() {
    this.userService.loadUser();
  }

}
