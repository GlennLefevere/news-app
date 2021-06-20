import { Injectable } from '@angular/core';
import {UserHttpService} from "../../http-services/user/user.http-service";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private readonly userHttpService: UserHttpService) {
  }

  getUser(): Observable<User | null> {
    return this.userSubject;
  }

  async loadUser() {
    const user = await this.userHttpService.getUser().toPromise();
    this.userSubject.next(user);
  }

}
