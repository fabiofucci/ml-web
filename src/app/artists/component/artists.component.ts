import {Component, Input} from '@angular/core';
import {Artist} from '../service/artistsservice';

@Component({
  selector: 'app-component-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  @Input() artists: Artist[];
}
