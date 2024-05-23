import { Route, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './views/certifications/certifications.component';
import { EducationComponent } from './views/education/education.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ProfileComponent } from './views/profile/profile.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertificationsComponent },
];
