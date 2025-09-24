import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule, TreeNode],
  templateUrl: './tree-node.html',
  styleUrl: './tree-node.css'
})
export class TreeNode implements OnInit {
  @Input() node: string = '';
  @Input() nodeChildren: string[] = [];
  @Input() treeObject: Record<string, string[]> = {};
  hasChildren: boolean = this.nodeChildren.length > 0;

  ngOnInit() {
    this.hasChildren = this.nodeChildren && this.nodeChildren.length > 0;
  }
}
