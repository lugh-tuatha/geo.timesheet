import { Component, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({
    required: true,
  })
  training: Training = {} as Training;

  faEllipsisVertical = faEllipsisVertical;
}
