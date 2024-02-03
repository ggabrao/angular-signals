import { Review } from "../reviews/review";

export interface Course {
    id: number;
    name: string; 
    price: number;
    emptySlots?: number;
    hasReviews?: boolean;
    reviews?: Review[];
}

export interface Result<T> {
    data: T | undefined;
    error?: string;
}