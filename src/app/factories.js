import {set} from 'cerebral/operators';
import {state} from 'cerebral/tags';

export function setCurrentPage(page, sequence=[]) {
    return [
        set(state`current_page`, page),
        sequence
    ]
}