import { OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent implements OnInit{

  //Get data from Parent to child
  @Input()  hero;

  //send data from child to parent
  @Output() public childEvent = new EventEmitter();

  constructor(){}

  ngOnInit(): void { 
    console.log("Hero = " + this.hero);
  }

  // On button click - Data is send from Child to Parent
  fireEvent(){
    this.childEvent.emit('Message from Child to Parent');
  }

}
