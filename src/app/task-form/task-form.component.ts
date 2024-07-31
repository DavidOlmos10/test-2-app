import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
selector: 'app-task-form',
standalone: true,
imports: [ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule],
templateUrl: './task-form.component.html',
styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
taskForm: FormGroup;

constructor(private fb: FormBuilder, private taskService: TaskService) {
  this.taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });
}

onSubmit() {
  if (this.taskForm.valid) {
    this.taskService.createTask(this.taskForm.value).subscribe();
  }
}
}
