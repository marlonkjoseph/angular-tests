import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

// My custom matcher functions
import { toBeDisplayed, notToBeDisplayed } from './custom-matchers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    // I added custom Jasmine matchers for cleaner tests!
    jasmine.addMatchers({ toBeDisplayed, notToBeDisplayed });
  }));

  describe('using element truthy/falsy', async() => {
    it('should show link 1', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link1'));
      expect(control).toBeTruthy();
    }));
  
    it('should not show link 2', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link2'));
      expect(control).toBeFalsy();
    }));
  
    it('should not show link 3 (should fail but passed)', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link3'));

      // Deliberately fail the test
      expect(control).toBeTruthy();  // <--- This should fail and it didn't
      
      //expect(control).toBeFalsy();
    }));

    it('should not show link 3 (should fail and did)', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link3:not([hidden]')); // We can add  the :not([hidden])
                                                                                 // selector to filter out hidden
                                                                                 // elements. This is messy so check
                                                                                 // out the custom Jasmine matchers
                                                                                 // I wrote below.


      // Deliberately fail the test
      expect(control).toBeTruthy();  // <--- This should fail and it did
      
      //expect(control).toBeFalsy();
    }));
  });

  describe('using custom jasmine matcher', async() => {
    it('should show link 1', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link1'));
      expect(control).toBeDisplayed();
    }));
  
    it('should show link 2', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link2'));
      expect(control).notToBeDisplayed();
    }));
  
    it('should not show link 3 (should fail and did)', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const control = fixture.debugElement.query(By.css('.link3'));
      
      // Deliberately fail the test      
      expect(control).toBeDisplayed();  // <--- This should fail and it did!

      // expect(control).notToBeDisplayed();
    }));
  });
});
