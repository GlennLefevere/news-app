import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private api = `${environment.api}/user`;

  constructor(private readonly http: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.api);
  }

}
