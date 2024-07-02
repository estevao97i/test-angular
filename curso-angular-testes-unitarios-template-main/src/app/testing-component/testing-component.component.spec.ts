import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';
import { By } from '@angular/platform-browser';

describe('TestingComponentComponent', () => {
  let component: TestingComponentComponent;
  let fixture: ComponentFixture<TestingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve acessar elemento na DOM com debugElement', () => {
    const elementoH1 = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement;

    expect(elementoH1.textContent).toBe('Trabalhando com debugElement.query() e nativeElement.querySelector()')
  })

  it('deve acessar elemento na DOM com querySelector', () => {
    const element1 = fixture.nativeElement.querySelector('p');

    expect(element1.textContent).toBe('esta aprendendo com curso de testes unitarios?');
  })

  it('deve verificar se os botoes na tela estao com as cores corretas', () => {
    const btn1 = fixture.debugElement.nativeElement.querySelector('.btn-yes') as HTMLElement;
    const btn2 = fixture.debugElement.query(By.css('.btn-no')).nativeElement;

    expect(btn1.style.backgroundColor).toBe(component.colorYes);
    expect(btn2.style.backgroundColor).toBe(component.colorNo);
  })

});
