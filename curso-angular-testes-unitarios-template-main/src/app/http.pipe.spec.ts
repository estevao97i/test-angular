import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  const pipe = new HttpPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('testing pipe http()', () => {
    expect(pipe.transform('http://google.com')).toBe('https://google.com');
  })
  
});
