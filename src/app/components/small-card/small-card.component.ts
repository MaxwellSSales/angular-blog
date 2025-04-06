import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  photoCover: string =
    'https://animefriends.com.br/wp-content/uploads/2025/03/INGRESSOS.png';
  @Input()
  cardTitle: string = 'Ingressos AnimeFriends 2025';

  @Input()
  Id: string = '0';

  constructor() {}
}
