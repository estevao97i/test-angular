import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login.component';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.form.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('teste se o formulario está inválido', () => {
    expect(component.isValidForm()).toBe(false)
  })

  it('teste se o formulario está válido', () => {
    component.form.get('email')?.setValue('estevao@gmail.com')
    component.form.get('password')?.setValue('aoba')
    expect(component.isValidForm()).toBe(true)
  })
  
  it('teste se o btn de salvar formulario esta desabilitado se form estiver invalido', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('button') as HTMLButtonElement
    expect(btn.disabled).toBe(true);
  })
  
  it('teste se o btn de salvar formulario esta habilitado se form estiver valido', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('button') as HTMLButtonElement
    component.form.get('email')?.setValue('estevao@gmail.com')
    component.form.get('password')?.setValue('aoba')
    component.isValidForm();
    fixture.detectChanges();
    
    expect(btn.disabled).toBe(false);
  })
  
  it('getValueControl()', () => {
    component.form.controls['email']?.setValue('estevao@gmail.com')
    expect(component.getValueControl(component.form, 'email')).toBe('estevao@gmail.com')
  })
});
