//need to inject this service as dependency
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//working with observables
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    constructor(private http: Http) {
        console.log('PostsService init');
    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

}