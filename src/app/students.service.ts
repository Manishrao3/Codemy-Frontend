import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url='http://localhost:8080/api/courses';
  url1='http://localhost:8080/api/newcourse';
  url2='http://localhost:8080/api/deletecourse';
  url3='http://localhost:8080/api/course';
  data1={};
  constructor(private http: HttpClient) { }
  getAllStudents(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
  SaveStudentData(data:any){
    console.log(data);
    return this.http.post(this.url1,data)
  }
  deleteCourseById(id:any){
    return this.http.delete(`${this.url2}/${id}`);
  }
  getCourseById(id:number){
    return this.http.get(`${this.url3}/${id}`);
  }
  updateStudentData(id:number,data:any){
    this.data1={
      name:data.name,
      duration:Number(data.duration),
      fee:data.fee
    }
    return this.http.put(`${this.url3}/${id}`, this.data1);
  }
  
}
