import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../model/news.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {

  private api = `${environment.api}/news`;

  constructor(private readonly http: HttpClient) {
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.api);
  }

}
