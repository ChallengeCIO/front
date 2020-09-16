import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AppService {

  _url = "http://finder-backend.mybluemix.net"

  constructor(private http: HttpClient) {}

  getStackoverflow(message): Observable<any[]> {
    return new Observable<any[]>(observer => {
          this.http.get<any[]>(this._url + '/search-stackoverflow?message=' + message).subscribe(
            data => {
              observer.next(data);
              console.log(data)
            },
            error => {
              let message = (error.error && error.error.message) ? error.error.message : 'No more details provided by backend';
              observer.error(`Error fetching stimulus: ${error.message}. Details: ${message}`);
            });

    });
}

getOauth(): Observable<any[]> {
  return new Observable<any[]>(observer => {
        this.http.get<any[]>(this._url + '/login-google').subscribe(
          data => {
            observer.next(data);
            console.log(data)
          },
          error => {
            let message = (error.error && error.error.message) ? error.error.message : 'No more details provided by backend';
            observer.error(`Error fetching stimulus: ${error.message}. Details: ${message}`);
          });

  });
}

  
}