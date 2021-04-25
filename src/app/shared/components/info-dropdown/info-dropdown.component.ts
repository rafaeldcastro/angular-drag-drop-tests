import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-dropdown',
  templateUrl: 'info-dropdown.component.html',
  styleUrls: ['info-dropdown.component.scss']
})
export class InfoDropdownComponent {

  @Input() icon: string;
  @Input() info: string;

  constructor() {  }
  
}