import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  username: string;
  constructor(private data: UserService) {
  }
  handle(userName) {
    this.username = userName;
    this.data.currentUser.subscribe(username => this.username = userName);
  }

  newUser(uname) {
    this.data.changeSource(uname);
  }
}
