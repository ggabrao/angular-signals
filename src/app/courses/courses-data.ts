import { Course } from "./course";

export class CourseData {

    static courses: Course[] = [
        {
            id: 1,
            name: "HTML",
            price: 2.99,
            duration: 5,
            emptySlots: 9,
            hasReviews: true
        },
        {
            id: 2,
            name: "CSS",
            price: 4.99,
            duration: 20,
            emptySlots: 6,
            hasReviews: true
        },
        {
            id: 3,
            name: "Typescript",
            price: 5.99,
            duration: 15,
            emptySlots: 8,
            hasReviews: true
        },
        {
            id: 4,
            name: "Bootstrap",
            price: 6.99,
            duration: 20,
            emptySlots: 2,
            hasReviews: false
        },
        {
            id: 5,
            name: "Angular 17",
            price: 9.99,
            duration: 40,
            emptySlots: 5,
            hasReviews: true
        },
    ];
}


