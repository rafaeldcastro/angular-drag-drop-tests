import { Component, Input, OnInit } from '@angular/core';

/**MODELS */
import { Widget, WidgetType } from './../../models/widget.model';

@Component({
  selector: 'widget-container',
  templateUrl: 'widget-container.component.html',
  styleUrls: ['widget-container.component.scss'],
  host: { 
    'class': 'wid-container'
  }
})
export class WidgetContainer implements OnInit{

  widgetTypes = WidgetType;
  @Input() widget: Widget;
  @Input() widgetIndex: number;

  constructor() { }
  
  ngOnInit(){
    
  }

  getWidgetIndex(): Number{
    return this.widgetIndex;
  }

  getWidget(): Widget{
    return this.widget;
  }

  setWidget(widget: Widget){
    this.widget = widget;
  }

}