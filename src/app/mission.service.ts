import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './mission';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionsUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missionsUrl);
  }
}
