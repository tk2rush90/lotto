import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {SubscriptionService} from '@lotto/services/subscription/subscription.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [
    SubscriptionService,
  ],
})
export class ContainerComponent implements OnInit {
  // loading state
  loading = false;

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit(): void {
    this._subscribeRouterEvents();
  }

  /**
   * subscribe router events
   */
  private _subscribeRouterEvents(): void {
    const sub = this.router.events
      .subscribe(res => {
        if (res instanceof NavigationStart) {
          this.loading = true;
        }

        if (
          res instanceof NavigationEnd
          || res instanceof NavigationCancel
          || res instanceof NavigationError
        ) {
          this.loading = false;
        }
      });

    this.subscriptionService.store('_subscribeRouterEvents', sub);
  }
}
