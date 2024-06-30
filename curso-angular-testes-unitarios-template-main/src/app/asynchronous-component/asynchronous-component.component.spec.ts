import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsynchronousComponentComponent } from './asynchronous-component.component';
import { HttpService } from '../service/http.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousComponentComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getUsers()', () => {
    const response = [{
      name: 'estevao',
      age: 26
    }]

    spyOn(http, 'getUsers').and.returnValue(of(response))

    component.getUsers()

    expect(component.data).toBe(response)
  })

  it('should log user', (done: DoneFn) => {
    let spy = spyOn(http, 'isAuthenticated').and.returnValue(Promise.resolve(true));

    component.isAuthenticaded();
    
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges()
      const logIn = fixture.debugElement.query(By.css('.logged')).nativeElement

      expect(logIn.textContent).toBe('Logado');
      done()
    })
  })

  it('should test defineValue()', fakeAsync(() => {
    component.defineValue()

    tick(100)
    expect(component.name).toBe('Jessica')
  }))
});
