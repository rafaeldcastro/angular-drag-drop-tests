import { Component, Input, OnInit } from '@angular/core';

/**MODELS */
import { Widget, WidgetType } from './../../models/widget.model';

@Component({
  selector: 'widget-container',
  templateUrl: 'widget-container.component.html',
  styleUrls: ['widget-container.component.scss']
})
export class WidgetContainer implements OnInit{

  widgetTypes = WidgetType;
  @Input() widget: Widget;
  @Input() widgetIndex: number;

  constructor() { }
  
  ngOnInit(){
    this.widget.index = this.widgetIndex ? this.widgetIndex : -1;
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