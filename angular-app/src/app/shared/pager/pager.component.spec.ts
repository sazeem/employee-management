import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerComponent } from './pager.component';

fdescribe('LoadingSpinnerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('# Should Create Pager Component', () => {
    expect(component).toBeTruthy();
  });

  it('# Should have a property called page initialized to 1',() => {
    expect(component.page).toBe(1);
  });

  it('# Should have a property called totalPages initialized to 0',() => {
    expect(component.totalPages).toBe(0);
  })
});
