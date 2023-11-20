import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SentenceDisplayComponent } from './components/sentence-display/sentence-display.component'

const routes: Routes = [
    { path: 'sentence-builder', component: SentenceDisplayComponent },
    { path: '', redirectTo: '/sentence-builder', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
