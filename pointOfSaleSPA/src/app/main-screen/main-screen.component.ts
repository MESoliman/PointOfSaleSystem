import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      console.log(this.authService.role);
    } else {
      console.log('token doesnt exist');
    }
  }

  logout () {
    this.authService.logout();
  }

  routeEmployee (role) {
    if (role === 'manager') {
      return 1;
    }
    if (role === 'data entry') {
      return 0;
    }
    if (role === 'cashier') {
      return -1;
    }
  }

}
