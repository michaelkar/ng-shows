import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TilesListService {

  BASE_URL = 'https://api.tvmaze.com/';

  constructor(private http: Http) {
  }

  getTiles(showName: string): Observable<any> {
    const url = this.BASE_URL + 'search/shows?q=' + encodeURI(showName);
    return this.http.get(url)
      .map(res => res.json())
      .catch(err => {
        console.log(err);
        return Observable.throw(err);
      });
  }
}
