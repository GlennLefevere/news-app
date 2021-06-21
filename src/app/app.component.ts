import {Component} from '@angular/core';
import {User} from './model/user.interface';
import {UserService} from "./services/user/user.service";
import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';

  user$: Observable<User | null> = this.userService.getUser();

  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
  }

  onLoginClicked() {
    this.router.navigate(['login'], {relativeTo: this.activatedRoute.root});
    /*this.userService.loadUser();*/
  }

}
