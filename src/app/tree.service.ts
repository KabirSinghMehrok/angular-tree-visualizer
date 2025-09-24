import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  treeObject = signal<Record<string, string[]>>({
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"],
  });
  rootNode = signal<string>("a");

  updateTree(newTree: string) {
    try {
      const parsedTree = JSON.parse(newTree);
      console.log("parse tree is", parsedTree);
      this.treeObject.set(parsedTree.tree);
      this.rootNode.set(parsedTree.root);
    } catch (error) {
      console.error('Invalid tree format', error);
    }
  }
}
