import { Component } from '@angular/core';
import { IUserProfile, ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  // standalone: true,
  providers: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public profileData: IUserProfile = new IUserProfile();
  private baseUrl: string = '/assets';

  constructor(_http: HttpClient, private _profileService: ProfileService) {}
  ngOnInit() {
    this._profileService.getProfile().subscribe((data: IUserProfile) => {
      console.log('profile data ', data);
      this.profileData = data;
    });
    console.log('profile component');
  }
}
