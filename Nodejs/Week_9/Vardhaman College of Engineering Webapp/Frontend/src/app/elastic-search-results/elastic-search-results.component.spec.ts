import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticSearchResultsComponent } from './elastic-search-results.component';

describe('ElasticSearchResultsComponent', () => {
  let component: ElasticSearchResultsComponent;
  let fixture: ComponentFixture<ElasticSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
