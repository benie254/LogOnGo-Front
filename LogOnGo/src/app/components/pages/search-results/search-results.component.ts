import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import * as Notiflix from 'notiflix';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searched_logs: any; 
  searched_date: any;
  searchResults: any;
  logDate: any;
  searchText: any;

  constructor(
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    this.searchEverything();
  }

  searchEverything(){
    this.logService.searchLog().subscribe(
      (data) => {
        this.searchResults = data;
      },
      err => {
        Notiflix.Notify.failure('search failed!')
      }
    )
  }
  dateValue(date: any){
    this.logDate = date;
  }

}
