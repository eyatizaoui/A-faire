import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumProductComponent } from './forum-product.component';

describe('ForumProductComponent', () => {
  let component: ForumProductComponent;
  let fixture: ComponentFixture<ForumProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
