import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { GuardGuard } from './guard.guard';
import { Router } from '@angular/router';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {} }
  let routeStateMock: any = { snapshot: {}, url: ['/login'] }
  let routerMock = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router, useValue: routerMock
        }
      ],
      imports: [ RouterTestingModule ]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('deve redirecionar usuario para tela de login quando não tiver token', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  })

  it('deve deixar o usuario entrar na rota caso tenha token', () => {
    localStorage.setItem('token', 'asdafdsfsdf');
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  })
});
