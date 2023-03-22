import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/Interfaces/user.interface';
import { AdminService } from 'src/app/Services/admin/admin.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:User[] = []
  constructor( private adminservice:AdminService){}
  ngOnInit(): void {
    this.adminservice.getAllUSers().subscribe((userss)=>{
      this.users = userss
      // console.log(userss);
    })
  }
  deleteUser(id:string){
    this.adminservice.deleteQuestion(id).subscribe()
    console.log(id);

  }
}
