import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorizontalTree } from './horizontal-tree/horizontal-tree';
import { InputBox } from './input-box/input-box';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HorizontalTree, InputBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tree-visualization');
}
