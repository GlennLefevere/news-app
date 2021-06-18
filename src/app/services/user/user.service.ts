import { Injectable } from '@angular/core';
import {UserHttpService} from "../../http-services/user/user.http-service";
import {Observable} from "rxjs";
import {User} from "../../model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly userHttpService: UserHttpService) { }

  getUser(): Observable<User> {
    return this.userHttpService.getUser();
  }

}
