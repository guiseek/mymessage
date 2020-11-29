import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Message } from '@mymessage/client/domain'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'message-create',
  templateUrl: './create.form.html',
  styleUrls: ['./create.form.scss'],
})
export class CreateForm implements OnInit {
  form = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    content: ['', Validators.required],
  })

  @Output() valueChanges = new EventEmitter<Partial<Message>>()
  @Output() create = new EventEmitter<Message>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(600)).subscribe(this.valueChanges)
  }
}
