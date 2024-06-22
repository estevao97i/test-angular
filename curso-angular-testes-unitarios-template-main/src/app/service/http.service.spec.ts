import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let url: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve realizar consulta pelo method GET', () => {
    service.getUsers().subscribe()
    const response: any[] = []
    const request = httpTestingController.expectOne(`${url}/users`)
    request.flush(response)
    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users`)
  })

  it('deve realizar consulta pelo method GET by id', () => {
    const id = 3;
    const response = {name: 'estevao', age: 26, email: 'tete@gmail.com'}

    service.getUsersById(id).subscribe({
      next: (value:any) => {
        expect(value).toBe(response)
      }
    });
    const request = httpTestingController.expectOne(`${url}/users/${id}`)

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users/${id}`)
    request.flush(response)
  });

  it('deve gerar error na aplicacao ao obter usuarios', () => {
    service.getUsers().subscribe({
      error: (error: any) => {
        expect(error.status).toBe(500)
      }
    })

    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users`)

    request.flush(500, {
      status: 500,
      statusText: 'Server Error'
    })
  })

  it('deve fazer requisição method POST', (() => {
    const user: any = {}
    service.postUser(user).subscribe();

    const request = httpTestingController.expectOne(`${url}/users`)
    expect(request.request.method).toBe('POST')
    expect(request.request.body).toBe(user)
  }))

  it('deve fazer requisição method PUT', () => {
    const user = {"name": "opa", "email": "estevaozin@fsdnfjhsd", "age": "22"}
    const response = {"name": "opa", "email": "estevaozin@fsdnfjhsd", "age": "22"}
    const id: number = 1

    service.putUser(id, user).subscribe((res) => {
      expect(res).toBe(response)
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`)
    expect(request.request.method).toBe('PUT')
    expect(request.request.body).toBe(user)

    request.flush(response)
  })
});
