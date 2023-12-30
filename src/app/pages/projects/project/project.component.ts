import { Component, Input } from '@angular/core';
import {Project} from "../../../services/sanity.service";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {CommaSpacePipe} from "../../../pipes/comma-space.pipe";


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommaSpacePipe,
    DatePipe
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project: Project | undefined;







}
