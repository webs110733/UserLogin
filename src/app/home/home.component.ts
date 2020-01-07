import { Component, OnInit } from '@angular/core';
import { DataSvcService } from '../data-svc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  constructor(private data: DataSvcService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }

  firstClick() {
    console.log('clicked');
    this.h1Style = !this.h1Style;
    this.data.secondClick();
  }



}
