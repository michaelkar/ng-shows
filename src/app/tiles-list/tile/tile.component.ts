import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() showName: string;
  @Input() showGenres: string[];
  @Input() showPoster: string;

  constructor() {
  }

  ngOnInit() {
  }

}
