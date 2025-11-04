import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GitHubRepo } from '../../services/github';

@Component({
  selector: 'app-repo-card',
  imports: [CommonModule],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.css',
})
export class RepoCard {
  @Input() repo!: GitHubRepo;
}
