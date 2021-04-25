import { Component, Input } from "@angular/core";

/**MODELS */
import { Widget } from "../../../models/widget.model";

@Component({
  selector: "widget-note",
  templateUrl: "note.component.html",
  styleUrls: ["note.component.scss"]
})
export class NoteComponent {
  @Input() widget: Widget;

  constructor() {}
}
