import { Component } from '@angular/core';
import { TreeNode } from '../tree-node/tree-node';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-horizontal-tree',
  standalone: true,
  imports: [TreeNode],
  templateUrl: './horizontal-tree.html',
  styleUrl: './horizontal-tree.css'
})
export class HorizontalTree {
  constructor(public treeService: TreeService) { }
}
