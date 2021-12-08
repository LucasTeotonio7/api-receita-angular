import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjDetailComponent } from './cnpj-detail.component';

describe('CnpjDetailComponent', () => {
  let component: CnpjDetailComponent;
  let fixture: ComponentFixture<CnpjDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnpjDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnpjDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
