import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "../services/user/user.service";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate, CanLoad {

  constructor(private readonly userService: UserService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getUser().pipe(
      filter(e => !!e),
      map(u => !!u?.authorities.includes('ROLE_ADMIN'))
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getUser().pipe(
      filter(e => !!e),
      map(u => !!u?.authorities.includes('ROLE_ADMIN'))
    );
  }
}
