import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './views/education/education.component';
import { CertificationsComponent } from './views/certifications/certifications.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/profile', pathMatch: 'full' },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'experience', component: ExperienceComponent },
//   { path: 'skills', component: SkillsComponent },
//   { path: 'education', component: EducationComponent },
//   { path: 'certifications', component: CertificationsComponent },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProfileComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    CertificationsComponent,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
