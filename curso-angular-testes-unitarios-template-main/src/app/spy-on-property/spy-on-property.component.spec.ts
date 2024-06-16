import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyOnPropertyComponent } from './spy-on-property.component';

describe('SpyOnPropertyComponent', () => {
  let component: SpyOnPropertyComponent;
  let fixture: ComponentFixture<SpyOnPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyOnPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyOnPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar a mensagem correta', () => {
    const mensagem = 'Olá, Mundo!';

    // aqui está mockando o valor para 'Olá, Mundo!'
    spyOn(component, 'message').and.returnValue(mensagem);

    // verifica se o que tem no componente ta igual ao mock
    expect(component.message).toEqual(mensagem)
  })

});
