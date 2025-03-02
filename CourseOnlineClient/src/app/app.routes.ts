import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseManageComponent } from './components/course/course-manage/course-manage.component';
import { LessonListComponent } from './components/lesson/lesson-list/lesson-list.component';
import { LessonDetailComponent } from './components/lesson/lesson-detail/lesson-detail.component';
import { LessonManageComponent } from './components/lesson/lesson-manage/lesson-manage.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserManageComponent } from './components/user/user-manage/user-manage.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'manage-courses', component: CourseManageComponent },
  { path: 'courses/:courseId/lessons', component: LessonListComponent },
  { path: 'courses/:courseId/lessons/:id', component: LessonDetailComponent },
  { path: 'manage-lessons', component: LessonManageComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'manage-users', component: UserManageComponent },
  { path: 'profile', component: ProfileComponent }
];


