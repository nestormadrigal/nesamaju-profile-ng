import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IExperience } from '../../services/profile.service';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-job-timeline',
  templateUrl: './job-timeline.component.html',
  styleUrl: './job-timeline.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class JobTimelineComponent implements OnInit {
  public experienceData: IExperience[] = [];
  public yearsOfExperience = 15;
  public yearStrings: string[] = [];
  public currentYear = new Date().getFullYear();
  public professionalExperience: any[] = [];

  constructor(public router: Router) {
    this.experienceData = <IExperience[]>(
      this.router.getCurrentNavigation()?.extras.state
    );
    console.log('data from routes ', this.experienceData);
  }

  ngOnInit(): void {
    for (let i = 0; i < this.yearsOfExperience; i++) {
      this.yearStrings.push(this.currentYear.toString());

      console.log('year ', this.currentYear);

      const pastJobs = Object.values(this.experienceData).filter((job) => {
        const startYear = job.startDate.toString().split('/');
        const endYear = job.endDate.toString().split('/');

        if (
          (job.currentJob && this.currentYear >= parseInt(startYear[1])) ||
          this.currentYear === parseInt(endYear[1]) ||
          (this.currentYear >= parseInt(startYear[1]) &&
            this.currentYear <= parseInt(endYear[1]))
        ) {
          return job;
        }
        return;
      });

      const experience = {
        yearLabel: this.yearStrings[i],
        company: pastJobs,
      };
      this.professionalExperience.push(experience);
      this.currentYear -= 1;
    }

    console.log('professional experience ', this.professionalExperience);
  }
}
