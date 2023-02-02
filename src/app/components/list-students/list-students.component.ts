import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private student:StudentsService) { }
  student_data:any=[];
  ngOnInit(): void {
    this.student.getAllStudents().subscribe((allData)=>
    {
      //console.log(allData);
      this.student_data=allData;
    });
  }
  deleteCourse(course_id:any){
    console.log(course_id);
    this.student.deleteCourseById(course_id).subscribe((allData)=>
    {
      //console.log(allData);
      this.ngOnInit();
    });
  }

}
