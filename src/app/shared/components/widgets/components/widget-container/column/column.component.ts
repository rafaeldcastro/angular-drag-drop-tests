import { Component, Input } from '@angular/core';

/**MODELS */
import { Widget } from '@shared/components/widgets/models/widget.model';

@Component({
  selector: 'widget-column',
  templateUrl: 'column.component.html',
  styleUrls: ['column.component.scss']
})
export class ColumnComponent{

  @Input() widget: Widget;

  constructor() {
    
  }


}