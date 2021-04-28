import { Dragable } from "./dragable.model";

export class Widget extends Dragable {
  type: WidgetType;

  id;
  index;
  icon;
  color;
  title;
  content;
  widgets: Widget[];

  constructor(data: Object = {}) {
    super();
    this.set(data);
  }

  static getNewNote() {
    return new Widget({
      type: WidgetType.NOTE,
      icon: "bi-card-text"
    });
  }

  static getNewColumn() {
    return new Widget({
      type: WidgetType.COLUMN,
      icon: "bi-distribute-horizontal",
      title: "New Column"
    });
  }
}

export enum WidgetType {
  NOTE = 1,
  LINK = 2,
  COLUMN = 3,
  IMAGE = 4,
  LINES = 5,
  CHECK_LIST = 6
}
