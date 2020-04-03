export default class Utils {
    static convertObject(object: Object[]) {
        const arrays = [];
        for (let inner of object) {
            if (inner instanceof Object) {
                arrays.push(Object.keys(inner))
            }
        }
        return arrays;
    }
}