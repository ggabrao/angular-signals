import { Review } from './review';

export class ReviewData {

  static reviews: Review[] = [
    {
      id: 1,
      courseId: 1,
      userName: "Gab",
      rating: 1,
      text: "Bad audio quality"
    },
    {
      id: 2,
      courseId: 3,
      userName: "Dan",
      rating: 5,
      text: "Amazing"
    },
    {
      id: 3,
      courseId: 1,
      userName: "Paulo",
      rating: 3,
      text: "Average"
    },
    {
      id: 4,
      courseId: 5,
      userName: "Marie",
      rating: 5,
      text: "Updated content and nice teacher"
    },
    {
      id: 5,
      courseId: 2,
      userName: "Marie",
      rating: 2,
      text: "Many oudated content"
    },
    {
      id: 6,
      courseId: 1,
      userName: "Gab",
      rating: 5,
      text: "Great lessons"
    },
    {
      id: 7,
      courseId: 2,
      userName: "Dan",
      rating: 4,
      text: "Good audio quality"
    },
    {
      id: 8,
      courseId: 5,
      userName: "Gab",
      rating: 5,
      text: "Everything I needed and more"
    },
    {
      id: 9,
      courseId: 5,
      userName: "Marie",
      rating: 5,
      text: "More than I expected!"
    },
    {
      id: 10,
      courseId: 1,
      userName: "Paulo",
      rating: 3,
      text: "Video quality could be better"
    }
  ];
}