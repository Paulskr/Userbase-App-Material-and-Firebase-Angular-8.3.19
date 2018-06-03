import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

	users: User[];

  user: User = {
    username: '',
    profession: '',
  }

  panelOpenState: boolean = false;

  // All Set
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  showSpinner: boolean = true;
  // Progress Bar Set
  showProgressBar: boolean = false;
  bufferValue = 75;

  constructor(public userService: UserService) { }

  ngOnInit() {
  	this.userService.getUser().subscribe(users => {
  		console.log(users); 
  		this.users = users;

      //end Spinner 
      this.showSpinner = false;
      //end ProgressBar
      this.showProgressBar = false;
  	}); 
  }


  onSubmit() {
    if(this.user.username != '' && this.user.profession != '') {
      this.userService.addUser(this.user);

      this.user.username = '';
      this.user.profession = '';

      this.showProgressBar = true;
    }
  }

  deleteUser(user) {
    this.userService.deleteUserId(user);
  }
 
  updateUser(user) {
    this.userService.updateUserId(user);
  }

  //reset event form submit
  // preview(event){
  //   event.preventDefault();
  // }


}

export interface User { 
	username: string;
	profession: string;
}