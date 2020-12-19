import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @Input() public videoUrl: string;
  @Input() public width: number = 1000;
  @Input() public height: number = 750;
}
