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
  loading: boolean = true;

  constructor(private g: Github) {}

  ngOnInit() {
    this.g.getRepos().subscribe((data) => {
      this.repos = data.filter((repo) => repo.description);
      this.loading = false;
    });
  }
}
