import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServiceService } from "../services/api-service.service";
import Swal from 'sweetalert2';
@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {
  addUser: FormGroup;
  errorMessage: string = '';

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required !' },
    ],
    'birthday': [
      { type: 'required', message: 'Birthday is required !.' },
    ]
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {
    this.addUser = this.formBuilder.group({
      _id: [],
      'name': new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      birthday: new FormControl ("", Validators.required)
    });
  }


  get name() { return this.addUser.get('name'); }

  onSubmit() {
    this.apiService.AddUser(this.addUser.value).subscribe(data => {
      Swal.fire("Good job!", "The data was added!", "success");
      this.router.navigate(["/"]);
    });
  }
}
