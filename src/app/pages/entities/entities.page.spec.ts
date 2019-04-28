import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesPage } from './entities.page';

describe('EntitiesPage', () => {
  let component: EntitiesPage;
  let fixture: ComponentFixture<EntitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntitiesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
