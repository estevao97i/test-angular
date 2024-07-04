import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverFocusDirective } from '../hover-focus.directive';

import { TestingDirectiveComponent } from './testing-directive.component';
import { By } from '@angular/platform-browser';

describe('TestingDirectiveComponent', () => {
  let component: TestingDirectiveComponent;
  let fixture: ComponentFixture<TestingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDirectiveComponent,
      HoverFocusDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar diretiva quando passar o mouse em cima', () => {
    const title = fixture.debugElement.nativeElement.querySelector('h1') as HTMLElement;

    title.addEventListener('mouseover', () => {
      expect(title.style.backgroundColor).toBe('blue');
    })
  })

  it('deve testar diretiva quando mouse sair de cima do elemento', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement; 

    title.addEventListener('mouseover', () => {
      expect(title.style.backgroundColor).toBe('inherit')
    })
  })

});
