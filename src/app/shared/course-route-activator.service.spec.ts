import { TestBed, inject } from '@angular/core/testing';

import { CourseRouteActivatorService } from './course-route-activator.service';

describe('CourseRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseRouteActivatorService]
    });
  });

  it('should be created', inject([CourseRouteActivatorService], (service: CourseRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
