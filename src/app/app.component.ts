import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

const {
  previousPathKey,
} = environment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lotto';

  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) {
    this._navigateToPreviousPath();
  }

  /**
   * navigate to previous path
   */
  private _navigateToPreviousPath(): void {
    const previousPath = sessionStorage.getItem(previousPathKey);

    if (previousPath) {
      this.ngZone.run(() => {
        this.router.navigate([previousPath.replace('/lotto', '')])
          .then(() => {
            sessionStorage.setItem(previousPathKey, '');
          });
      });
    }
  }
}
