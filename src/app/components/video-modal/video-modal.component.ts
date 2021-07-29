import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.sass'],
})
export class VideoModalComponent implements OnInit {
  icon = {
    file: 'close-white',
    width: 50,
    height: 50,
  };

  constructor() {}

  ngOnInit(): void {}
}
