import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  func1(x:number, y: number): number {
    return x + y;
  }

}
