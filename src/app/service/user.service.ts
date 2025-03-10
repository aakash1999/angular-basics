import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface ApiResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl: string = "https://reqres.in/api/users?page=2";

    constructor(private httpClient: HttpClient){}

    //Observable -> brother
    getUsers(): any {
        return this.httpClient.get(this.apiUrl);
    }

}