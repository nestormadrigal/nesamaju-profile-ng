import { Component } from '@angular/core';
import { JobTimelineComponent } from '../../components/job-timeline/job-timeline.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  standalone: true,
  imports: [JobTimelineComponent],
})
export class ExperienceComponent {}
