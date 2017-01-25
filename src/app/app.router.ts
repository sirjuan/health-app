import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { OverviewComponent } from './overview/overview.component';

export const router: Routes = [
    {path: '', redirectTo: 'questionnaire', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'questionnaire', component: QuestionnaireComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
