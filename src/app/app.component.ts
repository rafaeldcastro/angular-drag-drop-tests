import { Component, OnInit } from "@angular/core";
import interact from "interactjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initDraggable();
    this.initDropzone();
  }

  initDraggable() {
    const position = { x: 0, y: 0 };

    interact(".draggable").draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target);
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate(${position.x}px, ${
            position.y
          }px)`;
        }
      }
    });
  }

  initDropzone() {
    // enable draggables to be dropped into this
    interact(".dropzone").dropzone({
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent"
        })
      ],
      // only accept elements matching this CSS selector
      accept: ".draggable",
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,

      // listen for drop related events:

      ondropactivate: function(event) {
        //console.log("ondropactivate", event);
        // add active dropzone feedback
        event.target.classList.add("drop-active");
      },
      ondragenter: function(event) {
        //console.log("ondragenter", event);
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add("drop-target");
        draggableElement.classList.add("can-drop");
        draggableElement.textContent = "Dragged in";
      },
      ondragleave: function(event) {
        //console.log("ondragleave", event);
        // remove the drop feedback style
        event.target.classList.remove("drop-target");
        event.relatedTarget.classList.remove("can-drop");
        event.relatedTarget.textContent = "Dragged out";
      },
      ondrop: function(event) {
        //console.log("ondrop", event);
        event.relatedTarget.textContent = "Dropped";
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
