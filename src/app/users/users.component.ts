import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User }                                 from '../user';
import { USERS }                                from '../mock-users';
import { Observable, Subject }                  from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 }                                              from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UsersComponent implements OnInit {

  lsUsers = "toh-users";
  users = this.getUsers();
  selectedUser: User;
  users$: Observable<User[]>;
  private searchTerms = new Subject<string>();

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() {  }

  ngOnInit() {

  }

  onSearch(searchText) {
    console.log(searchText);
    let _searchUsers = this.getUsers();
    if (searchText !== '') {
      _searchUsers = _searchUsers.filter((user) => { return  (user.name && user.name.indexOf(searchText) !== -1)} );
    }
    this.users = _searchUsers;
  }

  getUsers() {
    let usersJson = JSON.parse(localStorage.getItem(this.lsUsers));
    if (usersJson != null) {
      console.log('found localStorage: ' + usersJson.length + 'users');
      return usersJson;
    } else {
      console.log('no users found in localStorage: generating mock users');
      localStorage.setItem(this.lsUsers, JSON.stringify(USERS));
      return USERS;
    }
  }

  addUser(user){
    this.users.push(user);
    localStorage.setItem(this.lsUsers, JSON.stringify(this.users));
  }

  removeUser(user) {
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);
    localStorage.setItem(this.lsUsers, JSON.stringify(this.users));
  }

}
