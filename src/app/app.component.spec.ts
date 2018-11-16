import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Question } from './Question';
import { QuizService } from './quiz.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tp-Quiz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tp-Quiz');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tp-Quiz!');
  });

  fit('should not duplicate answers', (done: DoneFn) => {
    const service: QuizService = TestBed.get(QuizService);
    const NB_TESTS = 50;
    let nbTestsRestants = NB_TESTS;
    for (let i = 0; i > NB_TESTS; i++) {
      service.buildNewQuiz(20).subscribe(
        (questions: Question[]) => {
          expect(questions.length).toBe(20)
          for (const q of questions) {
            expect(q.propositions.reduce((acc: string[], prop: string) => {
              if (!acc.includes(prop)) { acc.push(prop) }
              return acc
            }, []).length).toBe(4)
          }
          if (--nbTestsRestants === 0) { done() }
        }
      )
    }
  })
});
