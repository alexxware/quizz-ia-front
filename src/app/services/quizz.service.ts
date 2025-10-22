import { computed, Injectable, signal } from '@angular/core';
import { Question } from '../quizz-generate/interfaces/question.interface';

@Injectable({providedIn: 'root'})
export class QuizzService {
  constructor() { }

  private currentTopic = signal("");

  readonly currentTop$ = this.currentTopic.asReadonly();

  question: Question[] = [
    {
      mainQuestion: '¿Cuál es el planeta más grande del sistema solar?',
      answare1: 'Marte',
      idAnsware1: 'A',
      answare2: 'Júpiter',
      idAnsware2: 'B',
      answare3: 'Tierra',
      idAnsware3: 'C',
      answare4: 'Saturno',
      idAnsware4: 'D',
      idAnswareCorrect:'B',
      explication: 'Júpiter es el gigante gaseoso y el planeta con mayor masa de nuestro sistema solar.',
      error: false
    },
    {
      mainQuestion: '¿Cuál es el principal componente del aire que respiramos?',
      answare1: 'Oxígeno',
      idAnsware1: 'A',
      answare2: 'Dióxido de carbono',
      idAnsware2: 'B',
      answare3: 'Nitrógeno',
      idAnsware3: 'C',
      answare4: 'Argón',
      idAnsware4: 'D',
      idAnswareCorrect:'C',
      explication: 'El aire está compuesto principalmente por nitrógeno (alrededor del 78%) y oxígeno (alrededor del 21%).',
      error: false
    }
  ]

  set(value: string)
  {
    if (value.length > 3)
      this.currentTopic.set(value);
  }

}
