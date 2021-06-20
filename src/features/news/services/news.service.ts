import { Injectable } from '@angular/core';
import {NewsHttpService} from "../http-services/news.http-service";
import {Observable} from "rxjs";
import {News} from "../model/news.interface";

@Injectable()
export class NewsService {

  constructor(private readonly newsHttpService: NewsHttpService) {
  }

  getNews(): Observable<News[]> {
    return this.newsHttpService.getNews();
  }

}
