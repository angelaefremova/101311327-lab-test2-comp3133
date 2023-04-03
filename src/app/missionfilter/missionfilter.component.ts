import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
    years: number[] = [];
    @Output() yearSelected = new EventEmitter<string>();
  
    constructor() {
        const currentYear = new Date().getFullYear();
        for (let year = 2006; year <= currentYear; year++) {
          this.years.push(year);
        }
      }
    
      onYearSelect(event: Event): void {
        const selectedYear = (event.target as HTMLSelectElement).value;
        this.yearSelected.emit(selectedYear);
      }
}
