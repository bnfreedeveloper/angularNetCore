import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  private readonly inspectionAPIUrl = "https://localhost:7038/api";
  constructor(private http: HttpClient) { }


  public GetInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + "/Inspections")
  }
  public addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/inspections", data)
  }
  public updateInspection(id: Number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + "/inspections/" + id, data)
  }
  public deleteInspection(id: Number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`);
  }

  public GetInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + "/InspectionTypes")
  }
  public addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/InspectionTypes", data)
  }
  public updateInspectionTypes(id: Number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + "/inspectionTypes/" + id, data)
  }
  public deleteInspectionTypes(id: Number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`);
  }

  public GetStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + "/status")
  }
  public addStatus(data: any) {
    return this.http.post(this.inspectionAPIUrl + "/status", data)
  }
  public updateStatus(id: Number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + "/status/" + id, data)
  }
  public deleteStatus(id: Number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/status/${id}`);
  }
}
