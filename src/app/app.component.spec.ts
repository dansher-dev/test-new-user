import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatSelectModule, MatTabsModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
