import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  standalone: true,
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses('your-token-here').subscribe(courses => {
      this.courses = courses;
    });
  }
}