import {Component, Input} from '@angular/core';
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {RichTextToHtmlPipe} from "../../pipes/rich-text-to-html.pipe";
import {WorksComponent} from "../../pages/home/works/works.component";

@Component({
  selector: 'app-home-placeholder',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RichTextToHtmlPipe,
    WorksComponent,
    DatePipe
  ],
  templateUrl: './home-placeholder.component.html',
  styleUrl: './home-placeholder.component.css'
})
export class HomePlaceholderComponent {
  @Input() loadingText: string = '';

}
