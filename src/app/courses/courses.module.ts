import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import {SharedModule} from "../shared/shared.module";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    CoursesComponent
  ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialModule,
        SharedModule,
        MatMenuModule
    ]
})
export class CoursesModule { }
