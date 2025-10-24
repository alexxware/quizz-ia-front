import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { QuizzService } from '../../../services/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-page',
  imports: [],
  templateUrl: './quizz-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzPageComponent {
  private router = inject(Router);
  quizzService = inject(QuizzService);
  topicContent = this.quizzService.currentTop$;

  isCorrect = signal(true);
  questions = this.quizzService.question;
  currentQuestionIndex = signal(0);
  currentQuestion = computed(() => {
    return this.questions[this.currentQuestionIndex()];
  });

  selectedAnswareId = signal<string | null>(null);
  isAnswered = signal(false);

  ngOnInit()
  {
    if (this.topicContent() === '')
    {
      this.router.navigate(['/']);
    }
  }

  answers = computed(() => {
    const currentQ = this.currentQuestion();

    if (!currentQ) return [];
    return [
      { id: currentQ.idAnsware1, text: currentQ.answare1 },
      { id: currentQ.idAnsware2, text: currentQ.answare2 },
      { id: currentQ.idAnsware3, text: currentQ.answare3 },
      { id: currentQ.idAnsware4, text: currentQ.answare4 },
    ];
  });

  selectedAnswer(id: string)
  {
    if (!this.isAnswered())
    {
      this.selectedAnswareId.set(id);
    }
  }

}
