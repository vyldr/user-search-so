import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: Array<any> = [];
  currentUser: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchUsers(query: string) {
    this.http.get('https://api.stackexchange.com/2.3/users?order=desc&sort=name&inname=' + query + '&site=stackoverflow')
      .subscribe(list => this.updateList(list))
    return;
  }

  updateList(list: any) {
    this.users = list.items;
  }

  selectUser(user: any) {
    this.currentUser = user;
  }
}
