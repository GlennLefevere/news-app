import {Component} from '@angular/core';
import {User} from './model/user.interface';

@Component({
  selector: 'news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';

  user: User | undefined;

  onLoginClicked() {
    this.user = {
      firstName: 'Jos',
      lastName: 'Verstappen',
      email: 'Jos.de.bos@verstappen.nl'
    } as User;
  }

}
