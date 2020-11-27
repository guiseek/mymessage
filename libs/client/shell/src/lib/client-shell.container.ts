import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './client-shell.container.html',
  styleUrls: ['./client-shell.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientShellContainer implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
