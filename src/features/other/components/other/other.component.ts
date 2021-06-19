import {Component, OnInit} from '@angular/core';
import {OtherService} from "../../services/other.service";

@Component({
  selector: 'news-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  constructor(private readonly otherService: OtherService) {
  }

  ngOnInit(): void {
  }

}
