import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReviewComponent } from '../reviews/review.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [NgFor, RouterLink, ReviewComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  pageTitle = 'Courses List';
  courses: Course[] = [];

  private courseService = inject(CourseService);

  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => this.courses = data);
  }

  open() {
		this.modalService.open(ReviewComponent);		
	}

}
