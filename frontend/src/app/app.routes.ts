import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SolutionComponent } from './solution/solution.component';

export const routes: Routes = [
    { path: '', component: FormComponent, pathMatch: 'full' },
    { path: 'solution', component: SolutionComponent },
]
