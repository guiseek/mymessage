import { Component, OnInit} from '@angular/core';
import { AccountFacade, loadUser } from '@mymessage/client/domain';

@Component({
  selector: 'client-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    
    
    userList$ = this.accountFacade.userList$;


    constructor(private accountFacade: AccountFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.accountFacade.dispatch(loadUser());
    }

}

