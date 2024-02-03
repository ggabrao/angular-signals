import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Course } from './courses/course';
import { CourseData } from './courses/courses-data';
import { Review } from './reviews/review';
import { ReviewData } from './reviews/review-data';

export class DataService implements InMemoryDbService {

  createDb(): { courses: Course[], reviews: Review[] } {
    const courses = CourseData.courses;
    const reviews = ReviewData.reviews;
    return { courses, reviews };
  }
}

