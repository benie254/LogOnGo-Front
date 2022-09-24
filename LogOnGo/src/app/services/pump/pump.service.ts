import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pump } from 'src/app/classes/pump/pump';

@Injectable({
  providedIn: 'root'
})
export class PumpService {
  apiPumpOneInfo = 'http://127.0.0.1:8000/api/pump-one-info/'
  apiPumpTwoInfo = 'http://127.0.0.1:8000/api/pump-two-info/'
  apiPumpThreeInfo = 'http://127.0.0.1:8000/api/pump-three-info/'
  apiPumpFourInfo = 'http://127.0.0.1:8000/api/pump-four-info/'

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
