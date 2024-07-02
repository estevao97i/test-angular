import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve receber o usuario por @input', () => {
    const user = {name: 'Danilo', email: 'danilodev.silva@gmail.com', password: '091011'}

    component.user = user;

    expect(component.user).toBe(user);
  });

  it('deve mandar um evento de output para o pai', () => {
    const btnEventEmitter = fixture.debugElement.nativeElement.querySelector('button')
    let spy = spyOn(component.userMessage, 'emit');

    btnEventEmitter.click();

    expect(spy).toHaveBeenCalled();
  })

});
