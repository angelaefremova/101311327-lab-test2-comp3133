import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent {
  missions!: any[];

  @Input() selectedMission?: Mission;

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  onSelect(mission: Mission): void {
    if (mission) {
      this.selectedMission = mission;
    }
  }
  getMissions(): void {
    this.missionService
      .getMissions()
      .subscribe((missions) => (this.missions = missions));
  }
}
