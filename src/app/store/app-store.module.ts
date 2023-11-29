import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { SentenceEffects } from './effects/sentence.effects'
import { sentenceReducer } from './reducer/sentence.reducer'

@NgModule({
    imports: [
        StoreModule.forFeature('sentence', sentenceReducer),
        EffectsModule.forFeature([SentenceEffects]),
    ],
})
export class AppStoreModule {}
