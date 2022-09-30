import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';
@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  @Input() inspection: any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  inspectionTypeId!: number;
  constructor(private service: InspectionApiService) { }

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspection.inspectionTypeId || this.inspection.insepctionTypeId;
    this.statusList$ = this.service.GetStatusList();
    this.inspectionList$ = this.service.GetInspectionList();
    this.inspectionTypesList$ = this.service.GetInspectionTypesList();
  }
  addInspection() {
    var inspection = {
      status: this.status,
      comments: this.comments,
      insepctionTypeId: this.inspectionTypeId
    }
    this.service.addInspection(inspection).subscribe(res => {
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var addSuccess = document.getElementById("add-success-alert");
      if (addSuccess) addSuccess.style.display = "block";
      setTimeout(() => {
        if (addSuccess) {
          addSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
  updateInspection() {
    var inspection = {
      id: this.inspection.id,
      status: this.status,
      comments: this.comments,
      insepctionTypeId: this.inspectionTypeId
    }
    this.service.updateInspection(this.id, inspection).subscribe(res => {
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var updateSuccess = document.getElementById("update-success-alert");
      if (updateSuccess) updateSuccess.style.display = "block";
      setTimeout(() => {
        if (updateSuccess) {
          updateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
}
