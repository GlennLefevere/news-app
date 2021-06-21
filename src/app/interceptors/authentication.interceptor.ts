import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from "../services/user/user.service";
import {filter, switchMap} from "rxjs/operators";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private readonly userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.userService.getCredentials().pipe(
      filter(v => !!v),
      // @ts-ignore
      switchMap(({username, password}) => {
        const encrypted = btoa(`${username}:${password}`);
        let authReq = request.clone({
          setHeaders: {
            Authorization: `Basic ${encrypted}`,
          }
        });

        return next.handle(authReq);
      })
    );
  }
}
