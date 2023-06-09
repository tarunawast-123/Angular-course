import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses$: Observable<Course[]>;
  constructor(private http: HttpClient,) { }

  loadCourses(): Observable<Course []> {
    const params = new HttpParams()
                   .set("page","1")
                   .set("pageSize","10");

    return this.courses$ = this.http.get<Course []>('/api/courses',{params});
  }

  saveCourse(course: Course)  {
   return this.http.put(`/api/courses/${course.id}`,course);
  }

}
