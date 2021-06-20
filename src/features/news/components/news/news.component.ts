import {Component} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {Observable} from "rxjs";
import {News} from "../../model/news.interface";

@Component({
  selector: 'news-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  news$: Observable<News[]> = this.newsService.getNews();

  constructor(private readonly newsService: NewsService) { }

}
