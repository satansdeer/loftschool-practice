import CoursesStore from "./CoursesStore";
import CartStore from "./CartStore";

export default class RootStore {

    constructor() {
        this.init();
    }

    init = () => {
        this.coursesStore = new CoursesStore ();
        this.cartStore = new CartStore();
    }
}