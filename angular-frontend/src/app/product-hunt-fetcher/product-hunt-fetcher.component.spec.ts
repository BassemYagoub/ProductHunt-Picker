import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHuntFetcherComponent } from './product-hunt-fetcher.component';

describe('ProductHuntFetcherComponent', () => {
  let component: ProductHuntFetcherComponent;
  let fixture: ComponentFixture<ProductHuntFetcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHuntFetcherComponent]
    });
    fixture = TestBed.createComponent(ProductHuntFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
