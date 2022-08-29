import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searched_logs: any; 
  searched_date: any;

  constructor() { }

  ngOnInit(): void {
  }

}
