import { Component, OnInit } from '@angular/core';
import { RepoCard } from '../components/repo-card/repo-card';
import { CommonModule } from '@angular/common';
import { Github, GitHubRepo } from '../services/github';

@Component({
  selector: 'app-projects',
  imports: [RepoCard, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  repos: GitHubRepo[] = [];
  filteredRepos: GitHubRepo[] = [];
  loading: boolean = true;
  languages: string[] = [];
  selectedLanguage: string = 'all';

  constructor(private g: Github) {}

  ngOnInit() {
    this.g.getRepos().subscribe((data) => {
      this.repos = data;
      this.filteredRepos = this.repos;
      this.extractLanguages();
      this.loading = false;
    });
  }

  extractLanguages() {
    const langSet = new Set<string>();
    this.repos.forEach((repo) => {
      if (repo.language) {
        langSet.add(repo.language);
      }
    });
    this.languages = Array.from(langSet).sort();
  }

  filterByLanguage(language: string) {
    this.selectedLanguage = language;
    if (language === 'all') {
      this.filteredRepos = this.repos;
    } else {
      this.filteredRepos = this.repos.filter((repo) => repo.language === language);
    }
  }

  getLanguageCount(language: string): number {
    return this.repos.filter((repo) => repo.language === language).length;
  }
}
