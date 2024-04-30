import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

// export class ApiConnectorService {
//   constructor(private http: HttpClient) {}

//   public get(url: string) {
//     this.http.get(url);
//   }

//   public post(url: string, data: any) {
//     return this.http.post(url, data);
//   }

// }

export abstract class ApiConnectorService {
  // constructor() {

  // }

  public abstract get<T>(key: string): Promise<T | null>;
  // console.log('get service ', this.url);
  // return this._http.get(this.url) as Observable<T>;

  public abstract post<T>(): Promise<T | null>;

  // public post(url: string, data: Partial<T>): Observable<T> {
  //   return this._http.post(url, data) as Observable<T>;
  // }

  // private getHeaderOptions(headerOptions: string) {
  //   // TODO: implement custom headerOptions
  //   let httOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     }),
  //   };
  //   return httOptions;
  // }
}

// TODO: implement request and response generic models
@Injectable({
  providedIn: 'root',
})
export abstract class DataService<T> {
  constructor(public _httpClient: HttpClient) {}

  public get(url: string): Observable<T> {
    return <Observable<T>>this._httpClient.get(url);
  }

  public async post<T>(url: string): Promise<T | null> {
    return <T>this._httpClient.get(url);
  }
}

export class ApiResponse<T> {
  constructor() {}
}
