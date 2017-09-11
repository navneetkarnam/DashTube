import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {

  private userSource = new BehaviorSubject<string>(' ');
  currentUser = this.userSource.asObservable();

  constructor(private http: Http) {
  }

  changeSource(user: string) {
    this.userSource.next(user);
  }

  getChannelContent(userName): Observable<any> {

    let url = 'https://www.googleapis.com/youtube/v3/channels/';
    let forUsername = '&forUsername=';
    let user = userName;
    let part = '&part=snippet,contentDetails,statistics';
    let key = '?key=AIzaSyAMNinxOB6eNKjmVyic2BCdLpb5SFDL-Dw'

    return this.http.get(encodeURI(url + key + forUsername + user + part))
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  // getChannelContentById(channelId): Observable<any> {
  //
  //   let url2 = 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=';
  //   let cId = channelId;
  //   let rest = '&maxResults=25&key=AIzaSyAMNinxOB6eNKjmVyic2BCdLpb5SFDL-Dw';
  //
  //   return this.http.get(encodeURI(url2 + cId + rest))
  //     .map(response => response.json())
  //     .catch(error => Observable.throw(error.statusText));
  // }

}


// https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId={channel id here}&maxResults=25&key={YOUR_API_KEY}

