import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { iif } from 'rxjs';

@Directive({
  selector: '[appBindQueryParam]'
})
export class BindQueryParamDirective {
  @Input('bindQueryParam') paramKey: string;
  apiURL = 'http://127.0.0.1:8000/api/'

  constructor(
    private ngControl:NgControl,
  ) { }

  ngOnInit(){
    const queryParams = new URLSearchParams(location.search);

    if(queryParams.has(this.paramKey)){
      this.ngControl.control.patchValue(queryParams.get(this.paramKey));
    }
  }

}
