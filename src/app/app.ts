import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavQuizz } from "./shared/navbar/nav-quizz/nav-quizz";
import { HomePageComponent } from "./quizz-generate/pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [NavQuizz, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quizz-generate-front');
}
