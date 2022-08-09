import { Component } from '@angular/core';

@Component({
  selector: 'poc-nx-tests-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  projectName = 'POC-NX-TESTS';
  toggleSidebar = false;

  openSidebar(isOpen: boolean): void {
    this.toggleSidebar = isOpen;
  }
}
