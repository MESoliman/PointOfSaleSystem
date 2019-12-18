import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-data-entry-screen',
  templateUrl: './data-entry-screen.component.html',
  styleUrls: ['./data-entry-screen.component.css']
})
export class DataEntryScreenComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout () {
    this.authService.logout();
  }

}
