import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";
import { UserInterface } from "../models/user.interfase";

@Injectable({
  providedIn: "root"
})
export class ApiServiceService {
  endpoint: string = "http://localhost:8000/api";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  // Add Users
  AddUser(data: UserInterface): Observable<any> {
    let API_URL = `${this.endpoint}/add-user`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all users
  GetUsers() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get Users
  GetUser(_id): Observable<any> {
    let API_URL = `${this.endpoint}/read-user/${_id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update Users
  UpdateUser(_id, data: UserInterface): Observable<any> {
    let API_URL = `${this.endpoint}/update/${_id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete Users
  DeleteUser(_id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-user/${_id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
