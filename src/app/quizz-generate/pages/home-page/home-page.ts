import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizzService } from '../../../services/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private quizzService = inject(QuizzService);
  private router = inject(Router);

  startQuizz(value: string)
  {
    this.quizzService.set(value);
    const content = this.quizzService.currentTop$();
    if (content != '')
    {
      this.router.navigate(['/quizz'])
    }
  }

}
