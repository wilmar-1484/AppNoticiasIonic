import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ RespuestaTopHeadLines } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }
getToHeadLine(){
  const urlNoticias =`https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=844eed82b3714758a188f852fa963d59`;
  //const url=`https://api.allorigins.win/get?url=${encodeURIComponent(urlNoticias)}`;
  return this.http.get<RespuestaTopHeadLines>(urlNoticias);
}
}

