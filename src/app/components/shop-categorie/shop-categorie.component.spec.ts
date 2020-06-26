import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCategorieComponent } from './shop-categorie.component';

describe('ShopCategorieComponent', () => {
  let component: ShopCategorieComponent;
  let fixture: ComponentFixture<ShopCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
