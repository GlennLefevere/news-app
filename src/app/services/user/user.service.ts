import { Injectable } from '@angular/core';
import {UserHttpService} from "../../http-services/user/user.http-service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../../model/user.interface";
import {Credentials} from "../../model/credentials.interface";
import {catchError, filter, first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  private credentialsSubject: BehaviorSubject<Credentials | null> = new BehaviorSubject<Credentials | null>(null);

  constructor(private readonly userHttpService: UserHttpService) {
  }

  getUser(): Observable<User | null> {
    return this.userSubject;
  }

  async loadUser() {
    const user = await this.userHttpService.getUser().pipe(
      filter(v => !!v),
      first(),
    ).toPromise();
    this.userSubject.next(user);
  }

  setCredentials(credentials: Credentials) {
    this.credentialsSubject.next(credentials);
  }

  getCredentials(): Observable<Credentials | null> {
    return this.credentialsSubject;
  }

}
