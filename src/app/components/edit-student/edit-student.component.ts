import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from'@angular/forms';
import { StudentsService } from 'src/app/students.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private student: StudentsService, private router: ActivatedRoute, private rout:Router) { }
  editCourse=new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
    fee: new FormControl('')}
  );
  message: boolean=false;
  
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'] );
    this.student.getCourseById(this.router.snapshot.params['id'] ).subscribe((result:any)=>{
      console.log(result);
      this.editCourse=new FormGroup({
        name: new FormControl(result['name']),
        duration: new FormControl(result['duration']),
        fee: new FormControl(result['fee'])}
      );
    });
  }
  UpdateData(){
    console.log(this.editCourse.value);
    this.student.updateStudentData( this.router.snapshot.params['id'], this.editCourse.value).subscribe((result:any)=>{
      

    });
  }
  redirectToList(){
    this.rout.navigate(['List'])
  }

}
