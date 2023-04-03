import { Component, Input, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Mission } from '../mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
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
