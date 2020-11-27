import { Component, OnInit } from '@angular/core';
import {
  User,
  loadUser,
  selectUser,
  AccountFacade,
} from '@mymessage/client/domain';

@Component({
  selector: 'client-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userList$ = this.accountFacade.userList$;
  selectedUser$ = this.accountFacade.selectedUser$;
  constructor(private accountFacade: AccountFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.accountFacade.dispatch(loadUser());
  }
  select({ id }: Pick<User, 'id'>) {
    console.log({ id });
    this.accountFacade.dispatch(selectUser({ id }));
  }
}
