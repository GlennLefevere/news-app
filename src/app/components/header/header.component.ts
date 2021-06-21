import {Component, Input} from '@angular/core';
import {User} from '../../model/user.interface';

@Component({
  selector: 'news-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() user: User | undefined;

  constructor() { }


}
