import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataSvcService {

  constructor(private http: HttpClient) { }

  secondClick() {
    return console.log('clicked2');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUsersPage(pageNum: number){
    return this.http.get('https://reqres.in/api/users?page=' + pageNum);
  }
}
