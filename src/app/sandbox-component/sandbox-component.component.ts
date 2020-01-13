import { Component, OnInit } from '@angular/core';
import { DataSvcService } from '../data-svc.service';


@Component({
  selector: 'app-sandbox-component',
  templateUrl: './sandbox-component.component.html',
  styleUrls: ['./sandbox-component.component.css']
})
export class SandboxComponentComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  constructor(private data: DataSvcService) { }

  ngOnInit() {


  }

  getUsersPage(eventObject){
    this.data.getUsersPage(eventObject).subscribe((data) => {
      this.users = data;
      console.log(this.users)
    })

    console.log(eventObject);
  }

  // getUsersPage(page: string) {
  //   this.users['page'] = page;
  //   console.log(this.users);
  //   this.data.getUsersPage(this.users['page']).subscribe((data) => {
  //     this.users = data;
  //     console.log(this.users)
  //   })
  // }

getUsers() {
  this.data.getUsers().subscribe((data) => {
    this.users = data;
    console.log(this.users)
  })
}


  firstClick() {
    console.log('clicked');
    this.h1Style = !this.h1Style;
    this.data.secondClick();
  }


}
