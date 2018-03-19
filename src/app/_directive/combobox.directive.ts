import { Directive, HostListener, HostBinding } from '@angular/core';


// The name of the directive selector, we can call that with that name.
@Directive({
    selector: '[appCombobox]'
})

// This is for display the configuration buttom, later we use nxgbootstrap
export class ComboBoxDirective{
    // Default value, change with click.
    @HostBinding('class.open') estaAbierto: boolean = false;

    constructor(){}

    @HostListener('click') abrir(){        
        this.estaAbierto = !this.estaAbierto;
    }
}