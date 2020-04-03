import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UtilsService {
    convertObjectToArray(object: Object[]) {
        const arrays = [];
        for (let inner of object) {
            if (inner instanceof Object) {
                arrays.push(Object.keys(inner))
            }
        }
        return arrays;
    }
}