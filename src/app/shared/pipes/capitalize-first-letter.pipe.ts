import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'capitalizeFirstLetter',
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return ''
        }

        const trimmedValue = value.trim() // Trim whitespace
        const result =
            trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1)

        return result
    }
}
