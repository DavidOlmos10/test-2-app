import { Routes } from '@angular/router';
      import { TaskListComponent } from './task-list/task-list.component';
      import { TaskFormComponent } from './task-form/task-form.component';

      export const routes: Routes = [
        { path: 'task-list', component: TaskListComponent },
        { path: 'task-form', component: TaskFormComponent },
        { path: '', redirectTo: '/task-list', pathMatch: 'full' }
      ];
