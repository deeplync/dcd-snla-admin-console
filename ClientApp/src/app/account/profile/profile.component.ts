import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { TosterNotificationService } from 'src/app/core/services/toster-notification.service';
import { Account } from 'src/app/model/account.model';
import { Authority } from 'src/app/config/authority.constants';

@Component({
  selector: 'snla-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  account!: Account;
  authorities!: string[];
  selectedProfileImage: any = '';
  profileImage: any = '';
  isSaving=false;
  profileForm = this.fb.group({
    firstName: [undefined, [Validators.required,Validators.minLength(1)]],
    lastName: [undefined, [Validators.required,Validators.minLength(1)]],
    email: [undefined, [Validators.required,Validators.minLength(6),Validators.email]],
  });

  constructor( private fb: FormBuilder, private tosterService: TosterNotificationService) { }

  ngOnInit(): void {
    // this.accountService.identity().subscribe(
    //   (accountData) => {
    //     if (accountData) {
    //       this.profileForm.patchValue({
    //         firstName: accountData.firstName,
    //         lastName: accountData.lastName,
    //         email: accountData.email,
    //       });
    //       this.account = accountData;
    //       this.authorities = accountData.authorities;
    //       if (this.authorities.includes(Authority.ADMIN)) {
    //         this.accountService.getProfileImage().subscribe(
    //           (image: any) => {
    //             var reader = new FileReader();
    //             reader.readAsDataURL(image)
    //             reader.onload = (_event) => {
    //               this.profileImage = reader.result;
    //             }
    //           }
    //         )
    //       }
    //     }
    //   }
    // )
  }
  save(): void {
    const payload = {
      firstName: this.profileForm.get('firstName')!.value,
      lastName: this.profileForm.get('lastName')!.value,
      email: this.profileForm.get('email')!.value
    }
    // this.accountService.saveProfile(payload, this.authorities).subscribe(
    //   () => {
    //     this.account.firstName = this.profileForm.get('firstName')!.value
    //     this.account.lastName = this.profileForm.get('lastName')!.value
    //     this.account.email = this.profileForm.get('email')!.value
    //     this.tosterService.showSuccess('profile updated!', "success")
    //   }
    // )
  }
  onProfileImage_Selected(event: any):void{
    this.selectedProfileImage = <File>event.target.files[0];
  }
  saveProfileImage():void{
    // this.isSaving=false;
    // const fd = new FormData();
    // fd.append('media', this.selectedProfileImage)
    // fd.append('mimeType', this.selectedProfileImage.type)
    // this.accountService.updateProfileImage(fd).subscribe(
    //   () => {
    //     this.isSaving=true
    //     this.tosterService.showSuccess('profile Image updated!', "success")
    //     location.reload()
    //   }
    // )
  }
}
