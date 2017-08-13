import {Component, OnInit} from '@angular/core';
import {data} from '../sample-data';
import {TilesListService} from './tiles-list.service';

@Component({
  selector: 'app-tiles-list',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.scss'],
  providers: [TilesListService]
})
export class TilesListComponent implements OnInit {

  items: any[];

  constructor(private tilesListService: TilesListService) {
    this.items = data;
    //this.items = data.map(item => item.show);
  }

  ngOnInit() {
    this.getShows('image');
  }

  getShows(name: string) {
    this.tilesListService.getTiles(name).subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }
}
