import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { UseriaService } from '../useria.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  userList;
  address = new Address();
  constructor(private myUsers: UseriaService) { }

  ngOnInit() {
    this.userList = this.myUsers.users;
  }
  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
  }
  addTasks(name: string,id: number){
    this.myUsers.users.push(
      {
        name : name,
        id : id,
      }
      );
  }

}
