import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AutoDetectChangeComponent } from './auto-detect-change.component';
import { By } from '@angular/platform-browser';


describe('AutoDetectChangeComponent', () => {
  let component: AutoDetectChangeComponent;
  let fixture: ComponentFixture<AutoDetectChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoDetectChangeComponent ],
      providers: [
        {
          provide: ComponentFixtureAutoDetect, useValue: true
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDetectChangeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve ser emojin', () => {
    let emj = fixture.debugElement.query(By.css('h1')).nativeElement;
    let btn = fixture.debugElement.nativeElement.querySelector('button');

    btn.click();

    expect(emj.textContent).toBe(component.emoji);
  })
});
