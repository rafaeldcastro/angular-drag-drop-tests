import { Component } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragStart,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem,
  CdkDragRelease,
  CdkDragMove
} from "@angular/cdk/drag-drop";

/**MODELS */
import { Widget, WidgetType } from "./../../models/widget.model";

@Component({
  selector: "widget-board",
  templateUrl: "board.component.html",
  styleUrls: ["board.component.scss"],
  host: { "[class.wid-board]": "true" }
})
export class BoardComponent {
  widgetTypes = WidgetType;
  widgetsOnDrawer: Widget[];
  widgetsOnDesktop: Widget[] = [
    new Widget({
      type: WidgetType.NOTE,
      dragTranslation: "translate3d(433px, 357px, 0px)"
    }),
    new Widget({
      type: WidgetType.COLUMN,
      title: "New Column",
      dragTranslation: "translate3d(33px, 357px, 0px)"
    })
  ];

  constructor() {
    this.widgetsOnDrawer = [Widget.getNewNote(), Widget.getNewColumn()];
  }
  
  /** ========================================= */
  /** = DRAWER DRAG METHODS                   = */
  /** ========================================= */

  //Start dragging
  drawerDragStarted(event: CdkDragStart<any>,widgetIndex?) {
    const dragged = document.querySelector(`#widDrawerItem${widgetIndex}`);
    dragged.classList.add('wid-on-dragging');

    // console.log('Start', event);
  }

  //Touch end - before stop drag
  drawerDragReleased(event: CdkDragRelease<any>,widgetIndex?) {
    const dragged = document.querySelector(`#widDrawerItem${widgetIndex}`);
    dragged.classList.remove('wid-on-dragging');

    // console.log('Released', event);
  }

  //After drag stop
  drawerDragEnded(event: CdkDragEnd<any>, widgetIndex?, widgetType?) {
    const x = 65;
    const transform = event.source.element.nativeElement.style.transform;
    const positions = transform.replace('translate3d(', '').split(',')
      .map(a => parseInt(a.replace(/[^\-0-9]+/g, '')));
      
    const translate = `translate3d(${positions[0]}px,${positions[1]}px,${positions[2]}px)`;
    this.pushNewWidget(translate, widgetType);

    event.source._dragRef.reset();
  }

  pushNewWidget(translation, widgetType) {
    let newWidget;
    switch (widgetType) {
      case WidgetType.NOTE: newWidget = Widget.getNewNote(); break;
      case WidgetType.COLUMN: newWidget = Widget.getNewColumn(); break;
    }
    newWidget.dragTranslation = translation;
    this.widgetsOnDesktop.push(newWidget);
  }

  /** ========================================= */
  /** = DESKTOP DRAG METHODS                  = */
  /** ========================================= */

  //Start dragging
  deskDragStarted(event: CdkDragStart<any>,widgetIndex?) {
  }

  //Touch end - before stop drag
  deskDragReleased(event: CdkDragRelease<any>,widgetIndex?) {

  }

  //After drag stop
  deskDragEnded(event: CdkDragEnd<any>, widgetIndex?) {
    const translation = event.source.element.nativeElement.style.transform;
    this.widgetsOnDesktop[ widgetIndex ].dragTranslation = translation;
  }
}
