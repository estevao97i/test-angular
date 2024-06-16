import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJasmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true)
    expect([1,2,3]).toEqual([1,2,3])
  })

  it('deve testar se os valores são os mesmos e são do mesmo objeto', () => {
    interface testeToBe {
      a: string, b: boolean, c: number
    }

    const teste1: testeToBe = {
      a: 'opa', b: true, c: 2
    }

    const teste2: testeToBe = {
      a: 'aoba', b: false, c: 4
    }

    expect(teste1).toBe(teste1)
  })

  it('deve testar se os valores são truthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect('olá').toBeTruthy();
    expect({}).toBeTruthy();
  })

  it('deve testar se o valor é falsy', () => {
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  })

  it('deve testar se os valores são true (apenas booleanos)', () => {
    const a = null
    expect(10).toBeLessThanOrEqual(12);
    expect(15).toBeGreaterThan(9);
    expect(a).toBeNull();
  })

  it('deve testar o operador not', () => {
    const teste = 1
    const teste1 = 2

    expect(teste).not.toBeGreaterThan(teste1);
    expect(NaN).not.toBeTruthy();
    expect('estevao').not.toEqual('Camilla');
  })

  it('deve testar o operador toContain', () => {
    const teste = [1,2,3,4,5,6,7,8];
    const nome = 'Estevao'
    const aoba = {
      first: 'tevin',
      second: 26
    }

    const aoba2 = {
      first: 'geraldo',
      second: 39
    }

    expect(teste).toContain(8);
    expect(nome).toContain('Estev')
    expect(Object.values(aoba)).toContain(aoba.first)
  })

  it('deve testar o operador toBeDefined', () => {
    let name = 2;
    // let name = null;

    expect(name).toBeDefined();
  })

  it('deve testar o operador toBeUndefined', () => {
    let name;

    expect(name).toBeUndefined();
  })

  it('deve testar o operador toBeNull', () => {
    let name = null;

    expect(name).toBeNull();
  })

  it('deve testar o operador toBeNaN', () => {
    let number = NaN;

    expect(number).toBeNaN();
  })

  it('deve testar o operador toBeCloseTo', () => {
    let number = 10.50;
    let number2 = 10.5

    expect(number).toBeCloseTo(number2);
  })

  it('deve testar o operador toMatch', () => {
    expect('number').toMatch(/num/);
  })

  it('deve testar o operador toThrow', () => {
    expect(() => {
      throw new Error('my error')
    }).toThrow()
  })

});


