import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() searchCriteria: string;

  constructor() {
  }

  ngOnInit() {
  }

  doSearch(filter: string) {
    console.log('need to search for: ' + filter);
  }

}
