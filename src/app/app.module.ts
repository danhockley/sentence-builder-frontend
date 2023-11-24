import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WordSelectionComponent } from './components/word-selection/word-selection.component'
import { SentenceDisplayComponent } from './components/sentence-display/sentence-display.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SentenceBuilderComponent } from './components/sentence-builder/sentence-builder.component'

import { CapitalizeFirstLetterPipe } from './shared/pipes/capitalize-first-letter.pipe'

import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { SentencesTableComponent } from './components/sentences-table/sentences-table.component'

@NgModule({
    declarations: [
        AppComponent,
        WordSelectionComponent,
        SentenceDisplayComponent,
        SentenceBuilderComponent,
        SentencesTableComponent,
        CapitalizeFirstLetterPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
