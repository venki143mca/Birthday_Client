
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
    public employees: Array<any> = [];
    constructor(private _http: Http) { }

    getEmployees(): Observable<Response> {

        return this._http.get('http://localhost:9090/employee')
            .map((res: any) => {
                return res.json();
            })
    }

    getEmployee(id: any): Observable<Response> {
        console.log("id:", id);
        return this._http.get(`http://localhost:9090/employee/${id}`)
            .map((res: any) => {
                return res.json();
            })
    }

    createEmployee(employee: any): Observable<Response> {
        const data = JSON.stringify(employee);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log('create Employee', data);
        return this._http.post('http://localhost:9090/employee', data, {
            headers : headers
        });
    }

    deleteEmployee(id: Number): Observable<Response> {
        return this._http.delete(`http://localhost:9090/employee/${id}`);
    }

    editEmployee(employee: any): Observable<Response> {
        const id = employee.id;
        const data = JSON.stringify(employee);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(`http://localhost:9090/employee/${id}`, data, {
            headers: headers
        });
    }
}