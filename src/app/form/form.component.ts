import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  faculties: Faculty[] = [
    { "name": "yash", "age": 18 },
    { "name": "himanshu", "age": 17 },
    { "name": "raj", "age": 20 },
    { "name": "yagnik", "age": 21 }
];

myForm = new FormGroup({
  name: new FormControl(""),
  age: new FormControl(0),
});

submit() {
  const formValues = this.myForm.value;
  console.log(formValues);
  this.faculties.push(<Faculty>formValues);
  this.myForm.controls.name.setValue("");
  this.myForm.controls.age.setValue(0);
}

delete(id: number) {
  this.faculties.splice(id, 1);
}

setValue(id: number) {
  this.myForm.controls.name.setValue(this.faculties[id].name);
  this.myForm.controls.age.setValue(this.faculties[id].age);
}

}
