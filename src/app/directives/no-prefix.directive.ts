import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[noPrefix]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NoPrefixValidatorDirective, multi: true }]
})
export class NoPrefixValidatorDirective implements Validator {
    @Input() noPrefix: string;

    validate(control: AbstractControl): { [key: string]: any } {
        if (this.noPrefix && control.value) {
            const prefixFound = control.value.startsWith(this.noPrefix);
            return prefixFound ? { 'noPrefix': `Le prefixe '${this.noPrefix}'  n'est pas autorisé` } : null;
        }
        return null;
    }
}