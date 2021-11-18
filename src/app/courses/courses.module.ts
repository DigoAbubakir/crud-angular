import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import {SharedModule} from "../shared/shared.module";
import {MatMenuModule} from "@angular/material/menu";
import { CriarComponent } from './criar/criar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    CoursesComponent,
    CriarComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class CoursesModule { }
