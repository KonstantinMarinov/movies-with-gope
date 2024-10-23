import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mwg-movie-hero',
  templateUrl: './movie-hero.component.html',
  styleUrl: './movie-hero.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class MovieHeroComponent {
  @Input() contentDirection = 'row';
  @Input() title = 'Title';
}
