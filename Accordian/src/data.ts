import type { FAQItem } from "./types/faq.ts";

const data:FAQItem[] = [
  {
    id: "1",
    question: "What is React?",
    answer: "React is a JavaScript library used to build user interfaces, especially single-page applications.",
  },
  {
    id: "2",
    question: "Why should I use React?",
    answer: "React makes it easy to build reusable UI components and manage application state efficiently."
  },
  {
    id: "3",
    question: "What are components in React?",
    answer: "Components are independent, reusable pieces of UI that return JSX."
  },
  {
    id: "4",
    question: "What is useState?",
    answer: "useState is a React Hook that lets you add state to functional components."
  },
  {
    id: "5",
    question: "What is props?",
    answer: "Props are inputs passed from a parent component to a child component."
  }
];


export default data;