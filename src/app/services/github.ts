import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  fork?: boolean;
  visibility?: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class Github {
  private apiUrl = 'https://api.github.com/users/ShadowAmitendu/repos';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(this.apiUrl);
  }
}
