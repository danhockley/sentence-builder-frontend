import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SentenceBuilderComponent } from './components/sentence-builder/sentence-builder.component'

const routes: Routes = [{ path: '', component: SentenceBuilderComponent }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
