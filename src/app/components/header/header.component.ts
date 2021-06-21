import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../model/user.interface';

@Component({
  selector: 'news-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() user: User | null = null;

  @Output() loginClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  onLoginClicked($event: Event): void {
    $event.stopPropagation();
    $event.preventDefault();
    this.loginClicked.emit();
  }


}
