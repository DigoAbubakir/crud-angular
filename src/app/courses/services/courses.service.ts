import {Injectable} from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, first, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:9000'

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API + '/courses')
      .pipe(
        first(),
        delay(0)
      );
  }

}
