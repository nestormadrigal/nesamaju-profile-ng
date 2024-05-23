import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  IExperience,
  IProfile,
  IUserProfile,
  ProfileService,
} from '../../services/profile.service';
import { Router } from '@angular/router';

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
    console.log('year ', this.currentYear);

    for (let i = 0; i < this.yearsOfExperience; i++) {
      this.yearStrings.push((this.currentYear - i).toString());

      for (let j = 0; j < Object.values(this.experienceData).length; j++) {
        const startYear = this.experienceData[j]?.startDate;
        const endYear = this.experienceData[j]?.endDate;
        // (startYear && endYear) ||
        // (this.experienceData[j]?.currentJob &&
        //   endYear &&
        if (
          startYear.toString().includes(this.yearStrings[i]) ||
          endYear.toString().includes(this.yearStrings[i])
        ) {
          const experience = {
            yearLabel: this.yearStrings[i],
            companyName: this.experienceData[j].company,
          };
          this.professionalExperience.push(experience);
        }
      }
    }

    console.log('professional experience ', this.professionalExperience);
  }
}
