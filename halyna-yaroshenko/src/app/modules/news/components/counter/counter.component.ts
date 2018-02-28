import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-counter',
  styleUrls: ['./counter.component.scss'],
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  @Input() count: number;

  @Output() decrement = new EventEmitter<void>();
  @Output() increment = new EventEmitter<void>();
}
