import {Component, OnInit} from '@angular/core';
import {SanityService} from "../../services/sanity.service";
import {Project} from "../../services/sanity.service";
import {NgOptimizedImage} from "@angular/common";
import {ProjectComponent} from "./project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ProjectComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  projectsData: Project[] = [];
  constructor(protected sanityService: SanityService) {
  }
  ngOnInit(): void {
    this.fetchData()
  }




  fetchData() {
    // Make the HTTP request:
    this.sanityService.fetchSanityProjects().subscribe((data: Project[]) => {
      this.projectsData = data;
      //console.log(this.projectsData);
    });
  }


}
