import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  // Parent to Child
  name : string = 'Data sent from Parent to Child';

  //ViewChild Example
  @ViewChild(ChildComponentComponent) childComponent: ChildComponentComponent;

  //Child to parent
  message = '';

  //ViewChild Example
  viewChildMessage = '';

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit() {
    
  }

  //ViewChild Example
  ngAfterViewInit() {
    console.log(this.childComponent.childMessage);
    this.viewChildMessage = this.childComponent.childMessage;
    this.cdr.detectChanges();
  }

}
