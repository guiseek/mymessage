import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientShellContainer } from './client-shell.container';

describe('ClientShellContainer', () => {
  let component: ClientShellContainer;
  let fixture: ComponentFixture<ClientShellContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientShellContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientShellContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
