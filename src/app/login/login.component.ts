import {Component, OnInit} from '@angular/core';
import {IsMobileService} from '../is-mobile.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isMobile$: Observable<boolean>;

  constructor(private isMobile: IsMobileService) {
  }

  ngOnInit() {
    this.isMobile$ = this.isMobile.getIsMobile$();
  }
}
