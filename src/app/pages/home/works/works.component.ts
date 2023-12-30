import {Component, Input} from '@angular/core';
import {WorkExperience} from "../../../services/sanity.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  @Input() work: WorkExperience | undefined;

}
