import { Component, Input } from '@angular/core';
import {
  IProfile,
  IUserProfile,
  ProfileService,
} from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { JobTimelineComponent } from '../../components/job-timeline/job-timeline.component';
import {
  ActivatedRoute,
  Route,
  Router,
  RouterModule,
  RouterState,
} from '@angular/router';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  // standalone: true,
  providers: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIconModule,
    JobTimelineComponent,
    RouterModule,
  ],
})
export class ProfileComponent {
  public profileData: IProfile = {
    username: '',
    firstName: '',
    lastName: '',
    title: '',
    phone: '',
    email: '',
    location: '',
  };

  constructor(public router: Router) {
    this.profileData = <IProfile>(
      this.router.getCurrentNavigation()?.extras.state
    );
    console.log('data from routes ', this.profileData);
  }

  // @Input()
  // set userProfileData(profileData: IProfile) {
  //   this.route.data.subscribe((data) => {
  //         // this.profileData = profileData;
  //         console.log('data from routes ', data);
  //       });
  //     }
  // }
  // private baseUrl: string = '/assets';

  // constructor(route: Route, private _profileService: ProfileService) {
  //   this.route.data.subscribe((profileData: IProfile) => {
  //     this.profileData = profileData;
  //   });
  // }
  ngOnInit() {
    //   this._profileService.getProfile().subscribe((data: IUserProfile) => {
    //     console.log('profile data ', data);
    //     this.profileData = data;
    //   });
    //   console.log('profile component');
  }
}
