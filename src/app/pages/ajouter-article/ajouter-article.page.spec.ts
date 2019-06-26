import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArticlePage } from './ajouter-article.page';

describe('AjouterArticlePage', () => {
  let component: AjouterArticlePage;
  let fixture: ComponentFixture<AjouterArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterArticlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
