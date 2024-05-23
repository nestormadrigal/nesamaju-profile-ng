import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';
import { IUserProfile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    RouterLink,
    RouterLinkActive,
    MatSidenavContent,
    MatToolbar,
    MatIconButton,
    MatIcon,
    RouterOutlet,
  ],
})
export class LayoutComponent {
  events: string[] = [];
  sidenavOpened: boolean = false;
  public profileData: IUserProfile = new IUserProfile();

  constructor(_http: HttpClient, private _profileService: ProfileService) {
    this._profileService.getProfile().subscribe((data: IUserProfile) => {
      console.log('profile data ', data);
      this.profileData = data;
    });
  }
}
