import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from '../../services/news-service.service';
import {News} from '../../News';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news-gui',
  templateUrl: './news-gui.component.html',
  styleUrls: ['./news-gui.component.css']
})
export class NewsGuiComponent implements OnInit {
  newsList: Observable<News[]>;
  list: News[];

  constructor(private newsService: NewsServiceService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.newsService.getNewsList().subscribe(value => this.list = value);
    this.newsList = this.newsService.getNewsList();
  }

  delete(id: number) {
    this.newsService.deleteNews(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));;
  }
}
