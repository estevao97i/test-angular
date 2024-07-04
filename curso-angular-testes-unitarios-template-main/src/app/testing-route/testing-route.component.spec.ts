import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingRouteComponent } from './testing-route.component';
import { Router } from '@angular/router';

describe('TestingRouteComponent', () => {
  let component: TestingRouteComponent;
  let fixture: ComponentFixture<TestingRouteComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar se rota está sendo chamada para o local certo', () => {
    let route = 'extrato';
    spyOn(router, 'navigate');
    component.navigateUrl(route);
    expect(router.navigate).toHaveBeenCalledWith(['/extrato']);
  })

});
