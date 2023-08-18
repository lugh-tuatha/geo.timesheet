import { Component } from '@angular/core';

import * as Fa from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faRightFromBracket = Fa.faRightFromBracket;
  faRightToBracket = Fa.faRightToBracket;

  isLoggedIn(): boolean {
    return false;
  }
}
