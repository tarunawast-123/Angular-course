import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './service/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  courses$: Observable<Course[]>;

  constructor(private coursesServive: CoursesService) {

  }

  ngOnInit() {
    
    this.courses$ = this.coursesServive.loadCourses();
  }

  save(course: Course) {
    this.coursesServive.saveCourse(course)
    .subscribe(()=> {
      console.log("course saved!");
    });
  }



}
