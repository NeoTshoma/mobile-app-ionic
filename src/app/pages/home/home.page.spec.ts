import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to pickup-calls on see all', () => {
    spyOn(router, 'navigate');
    
    component.goToPickupCalls();

    expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-calls']);
  });


  it('should go the pickup-call page on create pickup call', () => {
    spyOn(router, 'navigate');

    component.newPickUpCall();

    expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-call']);
  })
});
