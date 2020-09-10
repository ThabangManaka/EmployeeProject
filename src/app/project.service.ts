import { Injectable } from '@angular/core';
import { Project } from './projects';

@Injectable()
export class ProjectService {
 _projectList: Project[] =  [{Id:1,Name:"Gijima", Description: "Mashaba", ProjectDate: new Date(12,11,2010), ImplemntingDepartment:"Health"},
 {Id:2,Name:"Revolution", Description: "Mashaba", ProjectDate: new Date(2008,11,8), ImplemntingDepartment:"Mining and Infrastructure"},
 {Id:3,Name:"Rhinestone", Description: "Mashaba", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Sales"},
  {Id:4,Name:"Great Leadership", Description: "Transporting books to different schools", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Educa"},
   {Id:5,Name:"Raubex", Description: "prides itself as a world class heavy sector construction sector company with a focus on infrastructure development that operates across Africa founded in 1974 by the legend Koos Raubenheimer and has progressively developed into a leader in construction.", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Sales"},
    {Id:6,Name:"Rhinestone", Description: "Mashaba", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Sales"},
     {Id:7,Name:"Rhinestone", Description: "Mashaba", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Sales"},
      {Id:8,Name:"Culinary", Description: "Culinary Equipment Company  is your source for the best industrial kitchen & catering equipment, with a wide range of world-class heritage brands used in the world’s leading kitchens", ProjectDate: new Date(12,12,2014), ImplemntingDepartment:"Agriculture"},
       {Id:9,Name:"SweepSouth", Description: "SweepSouth is bringing harmony to homes across South Africa with a fresh approach to home cleaning services", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Trasport"},
        {Id:10,Name:"Stefanutti Stocks", Description: "is one of South Africa’s leading construction companies with a capacity to deliver a range of projects of any scale to a multitude of clients in diverse markets and having a grade 9 rating from the South African Construction Industry Development Board,CIDB", ProjectDate: new Date(2010,11,8), ImplemntingDepartment:"Mining and Infrastructure"},]
  constructor() { }

getAllProject() {
    return this._projectList;
  }

}