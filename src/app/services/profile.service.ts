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
  username: string;
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  experience?: IExperience[];
  skills?: ISkill[];
  education?: IEducation[];
  certification?: ICertification[];

  constructor() {
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.title = '';
    this.phone = '';
    this.email = '';
    this.location = '';
    this.experience = [];
    this.skills = [];
    this.education = [];
    this.certification = [];
  }
}
interface IExperience {
  company: string;
  startDate: Date;
  endDate: Date;
  currentJob?: boolean;
  role: string;
  responsabilities: IResponsability[];
}

interface ISkill {
  name: string;
  experienceYears?: string;
  experienceLevel?: string;
}

interface IEducation {
  name: string;
  title: string;
  school: string;
  startDate: Date;
  endDate: Date;
}

interface IResponsability {
  clientName: string;
  duties: IDuties[];
}

interface IDuties {
  name: string;
  title?: string;
}

interface ICertification {
  name: string;
  school: string;
  startDate: Date;
  endDate: Date;
}

interface ICertification {
  name: string;
  entity: string;
  valid: Date;
}
