import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-reactive-wrapper',
  template: `
    <!--<form-reactive-simple></form-reactive-simple>-->
    <form-reactive-complex></form-reactive-complex>
  `,
  styles: []
})
export class FormReactiveWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
