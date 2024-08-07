import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormComponent } from './fill-form.component';
import { By } from '@angular/platform-browser';

describe('FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFormComponent ],
      imports: [ ReactiveFormsModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve disparar um evento de input', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.value = 'estevo';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('estevo')
  })
});
