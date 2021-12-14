import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {AssertNotNull} from "@angular/compiler";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category', 'actions']

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog) {

    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
          this.onError('Erro ao carregar cursos.')
          return of([])
        }
      )
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
        height: '400px',
        width: '400px',

        data: {
          mensagem: errorMsg,
          img: 'https://i.ibb.co/6r5XsJ2/sign-error-icon-34362-1.png'
        }
      }
    );
  }

  ngOnInit(): void {
  }


  delete(id: number) {
    this.coursesService.delete(id).subscribe(data => {
      this.courses$ = this.coursesService.list()
    })
  }


}
