import { Component } from '@angular/core';
import * as Fa from '@fortawesome/free-solid-svg-icons'
import { SIDEBAR_LINKS } from 'src/app/data/sidebar-links';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  faRightFromBracket = Fa.faRightFromBracket;
  faRightToBracket = Fa.faRightToBracket;
  sidebardata = SIDEBAR_LINKS;

  isLoggedIn(): boolean {
    return false;
  }
}
