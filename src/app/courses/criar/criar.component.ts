import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CoursesService} from "../services/courses.service";
import {Course} from "../model/course";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private courseService: CoursesService,
              private snackBar: MatSnackBar,
              private router: Router
  ) {
  }

  form!: FormGroup;

  gerarForm(): void {
    this.form = this.fb.group({
      name: ['',],
      category: ['',]
    });
  }

  ngOnInit() {
    this.gerarForm();
  }

  cadastrar() {
    const course: Course = this.form.value

    this.courseService.new(course).subscribe(data => {
        const msg = 'Course Created!';
        this.snackBar.open(msg, 'Success', {duration: 2000})
        this.router.navigate(['/'])
      },
      error => {
        let msg = 'Server Internal Error'
        if (error.status === 500) {
          msg = 'Backend Error'
          this.snackBar.open(msg, 'X', {duration: 3000})
        }
      }
    )
  }
}
