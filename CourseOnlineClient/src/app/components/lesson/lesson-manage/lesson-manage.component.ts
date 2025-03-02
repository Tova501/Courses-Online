import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonService } from '../../../services/lesson.service';
import { Lesson } from '../../../models/lesson.model';

@Component({
  selector: 'app-lesson-manage',
  templateUrl: './lesson-manage.component.html',
  styleUrls: ['./lesson-manage.component.css']
})
export class LessonManageComponent implements OnInit {
  lessonForm: FormGroup;

  constructor(private fb: FormBuilder, private lessonService: LessonService) {
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      courseId: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.lessonForm.valid) {
      const lesson: Lesson = this.lessonForm.value;
      this.lessonService.createLesson(lesson.courseId, lesson, 'your-token-here').subscribe(response => {
        // Handle lesson creation success
      }, error => {
        // Handle lesson creation error
      });
    }
  }
}