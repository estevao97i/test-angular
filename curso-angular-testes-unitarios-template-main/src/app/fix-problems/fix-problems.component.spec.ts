import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { FixProblemsComponent } from './fix-problems.component';


describe('FixProblemsComponent', () => {
  let component: FixProblemsComponent;
  let fixture: ComponentFixture<FixProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixProblemsComponent ],
      imports: [ MatDialogModule, ReactiveFormsModule, FormsModule ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
