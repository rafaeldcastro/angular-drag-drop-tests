import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

/**COMPONENTS */
import { ModalGenericComponent } from "../../../shared/components/modals/modal-generic/modal-generic.component";

/**MODELS */
import { Widget } from "../../../shared/components/widgets/models/widget.model";

/**SERVICES */
import { UtilsService } from "../../../shared/services/util.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild("genericModal", { static: true })
  genericModal: ModalGenericComponent;

  widget: Widget = new Widget({
    type: 1,
    content: "",
    isDragDisabled: true
  });

  widgets: Widget[] = [];

  // openedSidenav = false;
  // @ViewChild('sidenav', { static: true }) sidenav: any;

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.widgets.push(UtilsService.cloneObject(this.widget));
    }
  }

  ngOnInit() {
    // this.autoOpenSidenav();
  }

  // private autoOpenSidenav(){
  //   if (window.innerWidth < 768) {
  //     // this.sidenav.fixedTopGap = 64;
  //     this.openedSidenav = false;
  //   } else {
  //     // this.sidenav.fixedTopGap = 64;
  //     this.openedSidenav = true;
  //   }
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   if (event.target.innerWidth < 768) {
  //     this.sidenav.fixedTopGap = 55;
  //     this.openedSidenav = false;
  //   } else {
  //     this.sidenav.fixedTopGap = 55
  //     this.openedSidenav = true;
  //   }
  // }

  // isBiggerScreen() {
  //   const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  //   if (width < 768) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onInputChange(event, widgetIndex) {
    this.widgets[widgetIndex].content = UtilsService.convertToMarkup(
      event.target.innerHTML
    );
  }

  onPasteContent(event, widgetIndex) {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData("text");
    const sanitizedText = UtilsService.convertToMarkup(pastedText);
    this.widgets[widgetIndex].content = sanitizedText;
  }

  enableDrag(widgetIndex) {
    // document.querySelector('.dragable'+widgetIndex).classList.add('draging');
    this.widgets[widgetIndex].isDragDisabled = false;
  }

  dragStarted(event: CdkDragStart<any>) {
    // console.log(event)
    event.source.element.nativeElement.classList.add("draging");
  }

  dragEnded(event: CdkDragEnd<any>, widgetIndex) {
    // console.log(event)
    event.source.element.nativeElement.classList.remove("draging");
    this.widgets[widgetIndex].isDragDisabled = true;
  }

  openModalNewBoard() {
    // this.genericModal.present(true);
  }

  onConfirmBoard(widget: Widget) {
    this.widgets.push(widget);
    this.genericModal.dismiss();
  }
}
