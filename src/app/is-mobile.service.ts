import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsMobileService {
  isMobile$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => this.isMobile$$.next(result.matches), shareReplay()));
  }

  getIsMobile$(): Observable<boolean> {
    return this.isMobile$$.asObservable();
  }
}
