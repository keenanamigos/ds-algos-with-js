import { Customer } from "./Customer";
import { List } from "./List";

export class ListHelper {
    public static displayList(list: List): void {
        for (list.front(); list.currentPosition() < list.length(); list.next()) {
            if (list.getElement() instanceof Customer) {
                console.log(`${list.getElement().name}, ${list.getElement().movie}`);
            } else {
                console.log(list.getElement());
            }
        }
    }
}