import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CowinService {

  cowinUrl='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/'

  constructor(private http: HttpClient) { }

  getCalenderByCenter(centerId: any, date: any){

    const options ={ params: new HttpParams({
      fromObject: {
        center_id: centerId,
        date: date,
      }
    })};

    return this.http.get(this.cowinUrl+"calendarByCenter",options);
  }

  getCalenderByPin(pincode: any, date: any){

    const options ={ params: new HttpParams({
      fromObject: {
        pincode: pincode,
        date: date,
      }
    })};

    return this.http.get(this.cowinUrl+"calendarByPin",options);
  }
}
