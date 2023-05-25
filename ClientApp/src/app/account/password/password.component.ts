import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TosterNotificationService } from 'src/app/core/services/toster-notification.service';

@Component({
  selector: 'snla-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor( private router: Router,private fb: FormBuilder,private tosterService:TosterNotificationService) { }
  doNotMatch = false;
  error = false;
  authorities:any=[]
  isSaving = false;
  passwordForm = this.fb.group({
    oldPassword:['',[Validators.required]],
    newPassword: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // this.accountService.identity().subscribe(
    //   (response)=>{
    //     console.log(response?.authorities)
    //     this.authorities=response?.authorities
    //   }
    // )
  }
  changePassword(): void {
   
    this.error = false;
    this.doNotMatch = false;
    this.isSaving=false;
    const newPassword = this.passwordForm.get(['newPassword'])!.value;
    if (newPassword !== this.passwordForm.get(['confirmPassword'])!.value) { 
      this.doNotMatch = true;
    } else {
      // this.accountService.changePassword(newPassword, this.passwordForm.get(['oldPassword'])!.value,this.authorities).subscribe(
      //   () => (this.tosterService.showSuccess('password updated!',"success"),this.isSaving=true, this.router.navigateByUrl('/(route1:thank-you)')),
      //   () => (this.error = true)
      // );
    }
  }
  
}
