import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SentenceBuilderComponent } from './components/sentence-builder/sentence-builder.component'

const routes: Routes = [
    { path: '', component: SentenceBuilderComponent },
    // { path: '', redirectTo: '/sentence-builder', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
