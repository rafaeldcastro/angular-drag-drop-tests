import { Component, Input } from '@angular/core';

@Component({
  selector: 'ribbon',
  templateUrl: 'ribbon.component.html',
  styleUrls: ['ribbon.component.scss']
})
export class RibbonComponent {

  @Input() label;
  @Input() color;
  @Input() position;

  constructor() {  }
  
}

/**HOW TO USE */
//<ribbon [label]="'Teste'" [color]="'secondary'"></ribbon>