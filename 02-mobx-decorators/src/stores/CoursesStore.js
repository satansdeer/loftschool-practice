import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class CoursesStore {

    @observable courses = [];
    @observable status = "";
    @observable filter = {};

    @action
    fetchCourses = async filter => {

        this.status = "searching";
        this.filter = filter;
        this.images = [];
  
        try {
            //var params = { filter: filter };
            const response = await axios.get('http://localhost:4000/courses/');
            this.setCourses(response.data);
        } 
        catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    @action
    setCourses = (courses) => {
        this.courses = courses;
        this.status = "ok";
    }
}