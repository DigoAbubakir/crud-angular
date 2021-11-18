import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {CriarComponent} from "./criar/criar.component";

const routes: Routes = [
  {
    path: '', component: CoursesComponent,
  },
  {
    path: 'novo', component: CriarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
