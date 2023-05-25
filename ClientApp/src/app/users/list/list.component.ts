import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as dayjs from 'dayjs';

import { TosterNotificationService } from 'src/app/core/services/toster-notification.service';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'snla-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  userForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(1)]],
    lastName: ['', [Validators.required,Validators.minLength(1)]],
    email: ['', [Validators.required,Validators.minLength(6),Validators.email]],
  });
  users?: Account[]=[];
  isLoading = false;
  isSaving=false;
  constructor(private tosterService:TosterNotificationService,private fb: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll(): void {
    // this.isLoading = true;
    // this.accountService.fetchAll().subscribe(
    //   (res: HttpResponse<Account[]>) => {
    //     this.isLoading = false;
    //     this.users = res.body ?? [];
    //   },
    //   () => {
    //     this.isLoading = false;
    //   }
    // );
    this.users=[{
      authorities:[],
       id:"1",
      firstName:"Antony",
      lastName:"jhon",
      createdDateTime:dayjs('2022-01-05T13:49:46.573'),
      email:"antony@gmail.com",
      activated:true,
      imageUrl:null
    }]
  }
  changeStatus(id:string):void{
    // if (confirm("Are you sure want to change status!")) {
    //   this.accountService.updateStatus(id).subscribe(
    //     ()=>{
    //       this.ngOnInit();
    //     }
    //   )
    // } else {
    //  let txt = "You pressed Cancel!";
    // }
  }
  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }
  addUser():void{
    this.isSaving=false;
    const firstName= this.userForm.get('firstName')!.value
    const lastName=this.userForm.get('lastName')!.value
    const email=this.userForm.get('email')!.value
    // this.accountService.saveUser(firstName,lastName,email).subscribe(
    //   ()=>{
    //     this.modalService.dismissAll("success")
    //     this.tosterService.showSuccess('User created!',"success")
    //     this.userForm.reset({firstName: '',lastName: '',email: '',});
    //     this.ngOnInit()
    //     this.isSaving=true
    //   }
    // )
  }
}
