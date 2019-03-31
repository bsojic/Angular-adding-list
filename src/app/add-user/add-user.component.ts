import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = new User();
  @Output() onAddUser = new EventEmitter<User>();
  @Output() onCloseForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  addUser() {
    this.onAddUser.next (this.user);
    this.closeForm ();
    console.log(this.user);
  }

  closeForm(){
    this.onCloseForm.next (true);
  }

}
