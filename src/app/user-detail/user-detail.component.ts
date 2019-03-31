import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter  } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() onCloseForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeForm(){
    this.onCloseForm.next (true);
  }
}
