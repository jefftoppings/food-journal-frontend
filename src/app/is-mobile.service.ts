import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsMobileService implements OnDestroy {
  isMobile$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  subscriptions: Subscription[];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay(1)
      ).subscribe(this.isMobile$$);
  }

  getIsMobile$(): Observable<boolean> {
    return this.isMobile$$.asObservable();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
