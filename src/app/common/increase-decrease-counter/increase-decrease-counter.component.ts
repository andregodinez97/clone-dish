import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faMinus, faAdd} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-increase-decrease-counter',
  templateUrl: './increase-decrease-counter.component.html',
  styleUrls: ['./increase-decrease-counter.component.scss']
})
export class IncreaseDecreaseCounterComponent implements OnInit {
  faMinus = faMinus;
  faAdd = faAdd;

  @Input()
  showDecrease: boolean | undefined = true;

  @Input()
  decreaseDisabled: boolean | undefined;

  @Input()
  counterCount: number | undefined = 0;

  @Output()
  decreaseClicked = new EventEmitter();

  @Output()
  increaseClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
