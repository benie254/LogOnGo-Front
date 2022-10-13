import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import * as Notiflix from 'notiflix';
import { FormBuilder, Validators } from '@angular/forms';
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
  eOD: any;
  dateResults: any;
  id: number;
  values = '';
  noInput: boolean = true;
  fetchLogSuccess: boolean = false; 
  noLog: boolean = false;
  log: any;
  isLoading: boolean = false;
  error: any;
  message = '';
  empty: boolean;
  noResults: boolean;

  searchForm = this.fb.group({
    search: ['', [Validators.pattern]]
 });

  constructor(
    private logService:LogService,
    private fb:FormBuilder,
  ) { 
    if(this.searchResults && this.searchResults.length == 0){
      this.noResults = true;
    } else {
      this.noResults = false;
    }
  }

  ngOnInit(): void {
    this.searchEverything();
  }
  onKey(event: any){
    this.values = event.target.value; 
    this.fetchLogSuccess = false;
    this.noLog = false;
    // if (this.values == ''){
    //   this.noInput = true;
    // } else {
    //   this.noInput = false;
    // }
  }
  search(logDate: string): void{
    this.fetchLogSuccess = false;
    this.noLog = false;
    logDate = this.values.trim();
    if (!logDate) { return; }
    this.logService.searchByDate(logDate);
    this.isLoading= true;
    this.getByDate(logDate);
  }
  getByDate(logDate): void{
    console.log("log date:",logDate)
    Notiflix.Loading.hourglass('Searching...')
    this.logService.searchByDate(logDate).subscribe( data => {
        this.dateResults = data;
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Search success')
        if (this.log == undefined || this.log && this.log.length == 0){
          this.noLog = true;
        } else {
          this.noLog = false;
        }
      },
      err => {
        Notiflix.Loading.remove();
        this.error = err;
        this.message = this.error.statusText;
        Notiflix.Notify.failure(this.message)
      }
    );
    setTimeout(
      function(){
        this.isLoading= false;
        this.fetchLogSuccess = true;
        if(this.fetchLogSuccess = true && this.dateResults.length == 0){
          this.empty = true;
        } else {
          this.empty = false;
        }
      }.bind(this),1000
    );
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
  dateValue(eod: any){
    this.eOD = eod;
  }
  refresh(){
    location.reload();
    }

}
