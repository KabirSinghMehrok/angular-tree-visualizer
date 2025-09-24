import { Component, OnInit } from '@angular/core';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [],
  templateUrl: './input-box.html',
  styleUrl: './input-box.css'
})
export class InputBox implements OnInit {
  treeInputText: string = '';
  error: string = '';

  constructor(private treeService: TreeService) { }

  ngOnInit(): void {
    const defaultTree = {
      tree: this.treeService.treeObject(),
      root: this.treeService.rootNode()
    };
    console.log('changing the value of the text area', defaultTree)
    this.treeInputText = JSON.stringify(defaultTree, null, 2);
  }

  onUpdateButtonClick(newTreeValue: string) {
    this.treeService.updateTree(newTreeValue);
    this.error = this.treeService.error();
  }
}
