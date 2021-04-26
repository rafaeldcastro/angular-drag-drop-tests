import { Component } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragStart,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import interact from "interactjs";

/**MODELS */
import { Widget, WidgetType } from "./../../models/widget.model";
import { Subscription } from "rxjs";
import { EventEmitterService } from "../../../../../_core/services/emitter/event-emitter.service";

@Component({
  selector: "widget-board",
  templateUrl: "board.component.html",
  styleUrls: ["board.component.scss"],
  host: { "[class.wid-board]": "true" }
})
export class BoardComponent {

  private subscriptions = new Subscription();

  widgetsOnDesktop: Widget[] = [];
  widgetsDrawer: Widget[];

  constructor() {
    this.subscriptions.add( 
      EventEmitterService.get("DRAG_END").subscribe(position => this.onDragEnd(position)) 
    );

    this.widgetsDrawer = [Widget.getNewNote()];
  }

  ngOnInit() {
    this.initDraggable();
    this.initDropzone();
  }

  copyFromList(event: CdkDragDrop<any[]>) {
    console.log(event);

    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // const translation3d = `translate3d(${event.distance.x + 75}px,${event.distance.y + 82}px,0`;
      // this.widgetsOnDesktop[event.currentIndex].dragTranslation = translation3d;
      this.widgetsOnDesktop[event.currentIndex].dragPosition = event.distance;
      this.widgetsOnDesktop[event.currentIndex].title = event.currentIndex;
    }
  }

  dragEnded(event: CdkDragEnd<any>, widgetIndex?) {
    console.log(event);

    this.widgetsOnDesktop[widgetIndex].dragPosition = event.distance;
    // const positions = event.source.element.nativeElement
    // this.widgetsOnDesktop[widgetIndex].dragPosition =
  }

  dragFromDrawerEnded(event: CdkDragEnd<any>, widgetIndex?) {
    // const translation3d = `translate3d(${event.distance.x + 45}px,${event.distance.y + 64}px,0`;
    // let newWidget = Widget.getNewNote();
    // newWidget.dragTranslation = translation3d;
    // this.widgetsOnDesktop.push( newWidget );
  }

  onDesktopDragStarted(event: CdkDragStart<any>, widgetIndex) {
    event.source.element.nativeElement.style.transform = this.widgetsOnDesktop[
      widgetIndex
    ].dragTranslation;
  }

  onDesktopDragEnd(event: CdkDragEnd<any>, widgetIndex) {
    console.log(event);
    const translation3d = `translate3d(${event.distance.x}px,${
      event.distance.y
    }px,0`;
    this.widgetsOnDesktop[widgetIndex].dragTranslation = translation3d;
  }

  drop(event: CdkDragDrop<any[]>) {
    //   console.log(event)
    //   if (event.previousContainer === event.container) {
    //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    //   } else {
    //     transferArrayItem(
    //       event.previousContainer.data,
    //       event.container.data,
    //       event.previousIndex,
    //       event.currentIndex);
    //   }
  }

  /**================== */

  dropped(event) {
    // console.log(event);
    // console.log(event.source.element.nativeElement.style.transform);
    // // let newWidget = Widget.getNewNote();
    // const translation3d = event.source.element.nativeElement.style.transform;
    // let newWidget = Widget.getNewNote();
    // newWidget.dragPosition = event.distance;
    // newWidget.dragTranslation = translation3d;
    // this.widgetsOnDesktop.push(newWidget);
    // event.source.element.nativeElement.style.transform = "translate3d(0,0,0)";
  }

  /**========INTERACT JS========== */

  onDragEnd(position){
    const translation = `translate(${position.x}px, ${position.y}px)`;
    const newWidget = Widget.getNewNote();
    newWidget.dragTranslation = translation;
    this.widgetsOnDesktop.push( newWidget );
  }

  initDraggable() {
    const position = { x: 0, y: 0 };

    interact(".draggable").draggable({
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: ".wid-board"
        })
      ],
      listeners: {
        start(event) {
          console.log(event.type, event.target);
          event.target.classList.add("wid-drawer-button-dragging");
        },
        end(event){
          event.target.classList.remove("wid-drawer-button-dragging");
          EventEmitterService.get("DRAG_END").emit(position);
          position.x = 0;
          position.y = ;
          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
      }
    });
  }

  initDropzone() {
    // enable draggables to be dropped into this
    interact(".wid-desktop").dropzone({
      // only accept elements matching this CSS selector
      accept: ".draggable",
      // Require a 75% element overlap for a drop to be possible
      overlap: "center",

      // listen for drop related events:

      ondropactivate: function(event) {
        console.log("ondropactivate");
        // add active dropzone feedback
        event.target.classList.add("drop-active");
      },
      ondragenter: function(event) {
        console.log("ondragenter");
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add("drop-target");
        draggableElement.classList.add("can-drop");
        // draggableElement.textContent = "Dragged in";
      },
      ondragleave: function(event) {
        console.log("ondragleave");
        // remove the drop feedback style
        event.target.classList.remove("drop-target");
        event.relatedTarget.classList.remove("can-drop");
        // event.relatedTarget.textContent = "Dragged out";
      },
      ondrop: function(event) {
        console.log("ondrop");
        // event.relatedTarget.textContent = "Dropped";
      },
      ondropdeactivate: function(event) {
        //console.log("ondropdeactivate", event);
        // remove active dropzone feedback
        event.target.classList.remove("drop-active");
        event.target.classList.remove("drop-target");
      }
    });
  }
}
