import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  baseURL:string="";
  //baseURL:string=""; 
  //baseURL:string="";
  loaclConfig:string="";
  TestConfig:string=""; //stage , test , demo , beta
  ProductionConfig:string=""; //production ,live, alive , global
  constructor(private http:HttpClient) { }
}
