import {List} from 'immutable';

export default function getListObject(array) {
    return List(array);
}
export default function addElementToList(list, element) {
    return list.push(element);
}
