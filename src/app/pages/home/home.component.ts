import {Component, OnInit} from '@angular/core';
import {About, WorkExperience} from "../../services/sanity.service";
import {SanityService} from "../../services/sanity.service";
import { NgOptimizedImage} from "@angular/common";
//import {SharedModule} from "../../modules/shared/shared.module";
import {RichTextToHtmlPipe} from "../../pipes/rich-text-to-html.pipe";
import {ProjectsComponent} from "../projects/projects.component";
import {WorksComponent} from "./works/works.component";
import {HomePlaceholderComponent} from "../../components/home-placeholder/home-placeholder.component";

//import {MarkdownComponent} from "ngx-markdown";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RichTextToHtmlPipe,
    ProjectsComponent,
    WorksComponent,
    HomePlaceholderComponent,
    //MarkdownComponent,
    //SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  aboutData: About[] = [];
  workExperienceData: WorkExperience[] = [];
  constructor(protected sanityService: SanityService) {
  }

  ngOnInit(): void {
    this.fetchData()
    console.log(this.workExperienceData)
  }

  fetchData() {
    // Make the HTTP request:
    this.sanityService.fetchSanityAbout().subscribe((about: About[]) => {
      this.aboutData = about;
    });

    this.sanityService.fetchSanityWorkExperience().subscribe((workExperience: WorkExperience[]) => {
      this.workExperienceData = workExperience;
    });

  }


}
