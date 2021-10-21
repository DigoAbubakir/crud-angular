import {Injectable} from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'localhost:8080'

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(first());
  }

}
