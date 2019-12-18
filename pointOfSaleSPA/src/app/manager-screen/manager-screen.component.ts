import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout () {
    this.authService.logout();
  }
}
