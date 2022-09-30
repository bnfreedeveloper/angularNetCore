import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>
  inspectionTypesList$!: Observable<any[]>
  inspectionTypesList: any[] = [];
  inspectionTypesMap: Map<number, string> = new Map();

  modalTitle: string = "";
  activateAddEditInspectionComponent = false;
  inspection: any;

  constructor(private service: InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.GetInspectionList();
    this.inspectionTypesList$ = this.service.GetInspectionTypesList();
    this.RefreshInpectionTypesMap();
  }
  RefreshInpectionTypesMap() {
    this.service.GetInspectionTypesList().subscribe(data => {
      this.inspectionTypesList = data;
      data.forEach(d => this.inspectionTypesMap.set(d.id, d.inspectionName));
    })
  }
  modalAdd() {
    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null
    };
    this.modalTitle = "add inspection";
    this.activateAddEditInspectionComponent = true;
  }
  modalUpdate(item: any) {
    this.inspection = item;
    this.modalTitle = "edit inspection";
    this.activateAddEditInspectionComponent = true;
  }
  modalDelete(item: any) {
    if (confirm("are you sure ?")) {
      this.service.deleteInspection(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById("add-edit-modal-close");
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        var deleteSuccess = document.getElementById("delete-success-alert");
        if (deleteSuccess) deleteSuccess.style.display = "block";
        setTimeout(() => {
          if (deleteSuccess) {
            deleteSuccess.style.display = "none"
          }
        }, 4000);
      })

    }
  }
  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.GetInspectionList();
  }

}
