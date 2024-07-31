import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { Task } from '../modelos/task';
import { TaskService } from '../task.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'completed', 'actions'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task.id, task).subscribe();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
