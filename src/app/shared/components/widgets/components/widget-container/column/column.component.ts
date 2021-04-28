import { Component, Input } from "@angular/core";

/**MODELS */
import { Widget, WidgetType } from "../../../models/widget.model";

@Component({
  selector: "widget-column",
  templateUrl: "column.component.html",
  styleUrls: ["column.component.scss"],
  host: {
    class: "wid-container wid-column"
  }
})
export class ColumnComponent {
  widgetTypes = WidgetType;
  @Input() widget: Widget;
  @Input() widgetIndex: number;

  constructor() {}

  ngOnInit() {}

  getWidgetIndex(): Number {
    return this.widgetIndex;
  }

  getWidget(): Widget {
    return this.widget;
  }

  setWidget(widget: Widget) {
    this.widget = widget;
  }

  dropOnColumn(event) {
    console.log(event);
  }
}
