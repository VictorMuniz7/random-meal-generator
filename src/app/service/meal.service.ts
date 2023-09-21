import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomMeal(): Observable<any>{
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/random.php');
  }
}
