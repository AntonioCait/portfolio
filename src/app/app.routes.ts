import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
export const routes: Routes = [
  //home default path '/'
  {path: '', component: HomeComponent},
  //projects path '/projects'
  {path: 'projects', component: ProjectsComponent},
];
