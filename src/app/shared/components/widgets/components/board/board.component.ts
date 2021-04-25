import { Component } from '@angular/core';
import {
  CdkDrag, CdkDragDrop, CdkDragEnd, CdkDragStart,
  moveItemInArray, copyArrayItem, transferArrayItem
} from '@angular/cdk/drag-drop';

/**MODELS */
import { Widget, WidgetType } from './../../models/widget.model';

@Component({
  selector: 'widget-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss'],
  host: { '[class.wid-board]': 'true' }
})
export class BoardComponent {

  widgetsOnDesktop: Widget[] = [];
  widgetsDrawer: Widget[];

  constructor() {

    this.widgetsDrawer = [
      Widget.getNewNote()
    ];
  }

  copyFromList(event: CdkDragDrop<any[]>) {
    console.log(event)

    if (event.previousContainer !== event.container) {

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        
        // const translation3d = `translate3d(${event.distance.x + 75}px,${event.distance.y + 82}px,0`;
        // this.widgetsOnDesktop[event.currentIndex].dragTranslation = translation3d;
        this.widgetsOnDesktop[event.currentIndex].dragPosition = event.distance;
        this.widgetsOnDesktop[event.currentIndex].title = event.currentIndex;
    }
  }

  dragEnded(event: CdkDragEnd<any>, widgetIndex?) {
    console.log(event)

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
    event.source.element.nativeElement.style.transform = this.widgetsOnDesktop[widgetIndex].dragTranslation;
  }

  onDesktopDragEnd(event: CdkDragEnd<any>, widgetIndex) {
    console.log(event)
    const translation3d = `translate3d(${event.distance.x}px,${event.distance.y}px,0`;
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

  dropped(event){
    console.log(event)
    console.log(event.source.element.nativeElement.style.transform);
    
    // let newWidget = Widget.getNewNote();
    const translation3d = event.source.element.nativeElement.style.transform;
    let newWidget = Widget.getNewNote();
    newWidget.dragPosition = event.distance;
    newWidget.dragTranslation = translation3d;

    this.widgetsOnDesktop.push( newWidget );
    event.source.element.nativeElement.style.transform = 'translate3d(0,0,0)';
  }  
}