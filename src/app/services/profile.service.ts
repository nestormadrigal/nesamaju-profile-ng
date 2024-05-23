import { Inject, Injectable } from '@angular/core';
import { ApiConnectorService, DataService } from './api-connector.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
  // useClass: DataService,
  // useValue: { url: '/assets' },
})
export class ProfileService extends DataService<IUserProfile> {
  private baseUrl: string;

  constructor(override _httpClient: HttpClient) {
    super(_httpClient);
    this.baseUrl = '/assets/profile.json';
  }

  public getProfile(): Observable<IUserProfile> {
    console.log('in getProfile ');
    return this.get(this.baseUrl);
  }

  // public async addProfile(): Promise<IUserProfile | null> {
  //   return this._dataService.post(this.baseUrl);
  // }
}

export class IUserProfile {
  profile: IProfile;
  experience?: IExperience[];
  skills?: ISkill[];
  education?: IEducation[];
  certification?: ICertification[];

  constructor() {
    this.profile = {
      username: '',
      firstName: '',
      lastName: '',
      title: '',
      phone: '',
      email: '',
      location: '',
    };
    this.experience = [];
    this.skills = [];
    this.education = [];
    this.certification = [];
  }
}

export interface IProfile {
  username: string;
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  location: string;
}
export interface IExperience {
  company: string;
  startDate: Date;
  endDate: Date;
  currentJob?: boolean;
  role: string;
  responsabilities: IResponsability[];
}

export interface ISkill {
  name: string;
  experienceYears?: string;
  experienceLevel?: string;
}

export interface IEducation {
  name: string;
  title: string;
  school: string;
  startDate: Date;
  endDate: Date;
}

export interface IResponsability {
  clientName: string;
  duties: IDuties[];
}

export interface IDuties {
  name: string;
  title?: string;
}

export interface ICertification {
  name: string;
  entity: string;
  valid: Date;
}
