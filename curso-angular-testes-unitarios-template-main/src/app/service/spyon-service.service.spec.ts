import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpyonServiceService } from './spyon-service.service';

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar uma lista de usuarios', () => {
    const response = [
      {name: 'tete', age: 12, email: 'tete@dev.com'},
      {name: 'jose', age: 15, email: 'aoba@dev.com'},
      {name: 'maria', age: 19, email: 'ala@dev.com'},
    ]

    spyOn(service, 'getUsers').and.returnValue(of(response))

    service.getUsers().subscribe({
      next: (value: any) => {
        expect(value).toEqual(response);
      }
    })

  })
});
