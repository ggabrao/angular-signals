import { Course } from "../courses/course";

export interface CartItem {
  course: Course;
  quantity: number;
}