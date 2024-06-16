import { ConceptsTestsComponent } from './concepts-tests.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ConceptsTestsComponent', () => {

  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>

  beforeEach(() => {

    console.log('before --->')
    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent],
    }).compileComponents()


    fixture = TestBed.createComponent(ConceptsTestsComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  afterEach(() => {
    console.log('after --->')
    localStorage.removeItem('token')
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ConceptsTestsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should do another thing', () => {
    localStorage.setItem('token', 'asdsdgfshndugshdf234283757y23')

    expect(1+1).toBeGreaterThan(1);
  })


})

// describe('teste', () => {


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ConceptsTestsComponent]
//     })

//     let asdggg = 2

//     fixture = TestBed.createComponent(ConceptsTestsComponent);
//     component = fixture.componentInstance
//     fixture.detectChanges();
//   })

//   it('should create something', () => {
//     const asfsdf = {}


//     expect(asdggg > asfsdf).toBeTruthy();
// })
// })
