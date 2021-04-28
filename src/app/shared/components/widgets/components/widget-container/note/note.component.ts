import { Component, Input } from "@angular/core";

/**MODELS */
import { Widget, WidgetType } from "../../../models/widget.model";

@Component({
  selector: "widget-note",
  templateUrl: "note.component.html",
  styleUrls: ["note.component.scss"],
  host: {
    class: "wid-note"
  }
})
export class NoteComponent {
  @Input() widget: Widget;

  constructor() {}
}
