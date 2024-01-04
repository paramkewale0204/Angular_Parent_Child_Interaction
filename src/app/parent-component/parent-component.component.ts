import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  // Parent to Child
  name : string = 'Data sent from Parent to Child';

  //Child to parent
  message = '';
}
