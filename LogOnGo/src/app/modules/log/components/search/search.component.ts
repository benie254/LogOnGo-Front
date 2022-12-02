import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FormBuilder, Validators } from '@angular/forms';
import { LogService } from '../../services/log/log.service';
import { CardService } from 'src/app/modules/card/services/card/card.service';
import { MpesaService } from 'src/app/modules/mpesa/services/mpesa/mpesa.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  panelOpenState = false;
  cleared: boolean;
  hidden: boolean;
  searchResults: any;
  logDate: any;
  searchText: any;
  eOD: any;
  foundLogs: any;
  foundCards: any;
  foundMpesa: any;
  id: number;
  values = '';
  fetchLogSuccess: boolean = false; 
  noLog: boolean = false;
  noMpesa: boolean = false; 
  noCards: boolean = false;
  isLoading: boolean = false;
  empty: boolean;
  noResults: boolean;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];
  mpesaResults: any;
  cardResults: any;
  showM: boolean = true;
  showC: boolean = true; 
  showL: boolean = true;
  hideRes: boolean = true;

  constructor(
    private logService:LogService,
    private card:CardService,
    private mpesa:MpesaService,
  ) { }

  ngOnInit(): void {
    this.allLogs();
    this.allCards();
    this.allMpesa();
    if(this.searchResults && this.searchResults.length == 0){
      this.noResults = true;
    } else {
      this.noResults = false;
    }
  }
  onKey(event: any){
    this.values = event.target.value; 
    this.fetchLogSuccess = false;
    this.noLog = false;
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
    this.cardByDate(logDate);
    this.mpesaByDate(logDate);
  }
  getByDate(logDate): void{
    this.logService.searchByDate(logDate).subscribe( data => {
        this.foundLogs = data;
        if (this.foundLogs == undefined || this.foundLogs && this.foundLogs.length == 0){
          this.noLog = true;
        } else {
          this.noLog = false;
        }
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
  cardByDate(logDate): void{
    this.card.searchByDate(logDate).subscribe( data => {
        this.foundCards = data;
        if (this.foundCards == undefined || this.foundCards && this.foundCards.length == 0){
          this.noCards = true;
        } else {
          this.noCards = false;
        }
      }
    );
    setTimeout(
      function(){
        this.isLoading= false;
        this.fetchLogSuccess = true;
        if(this.fetchLogSuccess = true && this.foundCards.length == 0){
          this.empty = true;
        } else {
          this.empty = false;
        }
      }.bind(this),1000
    );
  }
  mpesaByDate(logDate): void{
    this.card.searchByDate(logDate).subscribe( data => {
        this.foundMpesa = data;
        if (this.foundMpesa == undefined || this.foundMpesa && this.foundMpesa.length == 0){
          this.noMpesa = true;
        } else {
          this.noMpesa = false;
        }
      }
    );
    setTimeout(
      function(){
        this.isLoading= false;
        this.fetchLogSuccess = true;
        if(this.fetchLogSuccess = true && this.foundMpesa.length == 0){
          this.empty = true;
        } else {
          this.empty = false;
        }
      }.bind(this),1000
    );
  }
  allLogs(){
    this.logService.searchLog().subscribe(
      (data) => {
        this.searchResults = data;
      }
    )
  }
  allCards(){
    this.card.getAllCreditCardLogs().subscribe(
      (data) => {
        this.cardResults = data;
      }
    )
  }
  allMpesa(){
    this.mpesa.getAllMpesaLogs().subscribe(
      (data) => {
        this.mpesaResults = data;
      }
    )
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.allLogs();
    this.allCards();
    this.allMpesa();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.allLogs();
    this.allCards();
    this.allMpesa();
  }
  dateValue(eod: any){
    this.eOD = eod;
  }
  openC(){
    this.showC = true; 
  }
  openM(){
    this.showM = true; 
  }
  openL(){
    this.showL = true;
  }
  close(){
    this.showL = false; 
    this.showC = false; 
    this.showM = false;
  }
  hideR(){
    this.hideRes = true;
  }
}


