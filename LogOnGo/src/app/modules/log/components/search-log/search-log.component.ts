import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-search-log',
  templateUrl: './search-log.component.html',
  styleUrls: ['./search-log.component.css']
})
export class SearchLogComponent implements OnInit {
  logType: any;
  panelOpenState = false;
  cleared: boolean;
  hidden: boolean;
  searched_logs: any; 
  searched_date: any;
  searchResults: any;
  logDate: any;
  searchText: any;
  eOD: any;
  dateResults: any;
  id: number;
  values = '';
  mValue: any;
  noInput: boolean = true;
  fetchLogSuccess: boolean = false; 
  noLog: boolean = false;
  log: any;
  isLoading: boolean = false;
  error: any;
  message = '';
  empty: boolean;
  noResults: boolean;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 5, 10, 15];

 

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
  clearValues(){
    document.forms["searchForm"].reset();
    this.values = '';
    this.cleared = true;
  }
  unClear(){
    this.cleared = false;
  }
  hide(){
    this.hidden = true;
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
  onTableDataChange(event: any) {
    this.page = event;
    this.searchEverything();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.searchEverything();
  }
  dateValue(eod: any){
    this.eOD = eod;
  }
  refresh(){
    location.reload();
    }

}

