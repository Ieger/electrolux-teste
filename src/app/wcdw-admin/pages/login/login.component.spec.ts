import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbInstanceComponent } from './login.component';

describe('DbInstanceComponent', () => {
  let component: DbInstanceComponent;
  let fixture: ComponentFixture<DbInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
