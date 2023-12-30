import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";


export interface Project {
  date: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  title: string;
}
export interface ProjectResponse {
  result: Project[];
}

export interface About {
  title: string;
  description: {
    _type: string;
    children: {
      _type: string;
      marks: string[];
      text: string;
    }[];
    markDefs: any[];
    style: string;
  }[]
  image: string;
}

export interface AboutResponse {
  result: About[];
}

export interface WorkExperience {
  company: string;
  position: string;
  fromDate: string;
  toDate: string;
  present: boolean;
  description: string;
}

export interface WorkExperienceResponse {
  result: WorkExperience[];
}

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  PROJECT_ID = 'hiwolcpg';
  DATASET = 'production';
  //QUERY = encodeURIComponent('*[_type == "project"]');

  QUERY_PROJECTS = encodeURIComponent('*[_type == "project"]{..., "image": image.asset->url}' + '| order(date desc)' );
  //get image cropped as circle from sanity
  QUERY_ABOUT = encodeURIComponent('*[_type == "about"]{..., "image": photo.asset->url}' );
  QUERY_WORK_EXPERIENCE = encodeURIComponent('*[_type == "workExperience"]' + '| order(fromDate desc)' );
// Compose the URL for your project's endpoint and add the query
  URL_PROJECTS = `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${this.QUERY_PROJECTS}`;
  URL_ABOUT = `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${this.QUERY_ABOUT}`;
  URL_WORK_EXPERIENCE = `https://${this.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${this.DATASET}?query=${this.QUERY_WORK_EXPERIENCE}`;




  constructor(private httpClient: HttpClient) { }




  fetchSanityProjects() {
    return this.httpClient.get<ProjectResponse>(this.URL_PROJECTS).pipe(
      map((data: ProjectResponse) => data.result)
    );
  }


  fetchSanityAbout() {
    return this.httpClient.get<AboutResponse>(this.URL_ABOUT).pipe(
      map((data: AboutResponse) => data.result)
    );
  }
  fetchSanityWorkExperience() {
    return this.httpClient.get<WorkExperienceResponse>(this.URL_WORK_EXPERIENCE).pipe(
      map((data: WorkExperienceResponse) => data.result)
    );
  }
}
