import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bar-lib',
  template: `
    <p>
      bar-lib works!
    </p>
  `,
  styles: [
  ]
})
export class BarLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
