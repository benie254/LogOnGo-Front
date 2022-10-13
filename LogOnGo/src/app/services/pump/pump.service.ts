import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pump } from 'src/app/classes/pump/pump';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class PumpService {
  apiPumpOneInfo = apiURL + 'pump-one-info/';
  apiPumpTwoInfo = apiURL + 'pump-two-info/';
  apiPumpThreeInfo = apiURL + 'pump-three-info/';
  apiPumpFourInfo = apiURL + 'pump-four-info/';

  constructor(
    private http:HttpClient,
  ) { }

  getPumpOneInfo(): Observable<Pump>{
    return this.http.get<Pump>(this.apiPumpOneInfo)
  }
  getPumpTwoInfo(): Observable<Pump>{
    return this.http.get<Pump>(this.apiPumpTwoInfo)
  }
  getPumpThreeInfo(): Observable<Pump>{
    return this.http.get<Pump>(this.apiPumpThreeInfo)
  }
  getPumpFourInfo(): Observable<Pump>{
    return this.http.get<Pump>(this.apiPumpFourInfo)
  }
}
