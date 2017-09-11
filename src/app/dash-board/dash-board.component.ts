import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user-service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  receive: string;
  recievedString;
  constructor( private route: ActivatedRoute, private data: UserService) {
    this.data.currentUser.subscribe(receive => this.receive = receive);

    this.route.params.subscribe(params => {
      data.getChannelContent(this.receive)
        .subscribe(recievedData => this.recievedString = recievedData);
    });
  }
}
