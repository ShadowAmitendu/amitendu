import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize the scroll animations after the view loads
    this.createInfiniteScroll('scroll1-container', 'Amitendu Bikash Dhusiya', 'text-white', 'left');
    this.createInfiniteScroll('scroll2-container', 'Web Developer', 'text-gray-800', 'right');
  }

  private createInfiniteScroll(
    containerId: string,
    text: string,
    textColor: string,
    direction: 'left' | 'right' = 'left'
  ): void {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found.`);
      return;
    }

    const scrollElement = container.querySelector<HTMLElement>('.scroll-text');
    if (!scrollElement) {
      console.error(`.scroll-text element not found inside #${containerId}.`);
      return;
    }

    // Create repeated text
    const repeatCount = 20;
    const content = Array.from(
      { length: repeatCount },
      () => `<span class="${textColor} text-2xl font-black px-6">${text}</span>`
    ).join('');

    scrollElement.innerHTML = content;

    // Wait for layout calculation
    requestAnimationFrame(() => {
      const scrollWidth = scrollElement.offsetWidth / 2;

      if (direction === 'left') {
        gsap.fromTo(
          scrollElement,
          { x: 0 },
          { x: -scrollWidth, duration: 30, ease: 'none', repeat: -1 }
        );
      } else {
        gsap.fromTo(
          scrollElement,
          { x: -scrollWidth },
          { x: 0, duration: 30, ease: 'none', repeat: -1 }
        );
      }
    });
  }
}
