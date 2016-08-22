/**
 * Created by dcook on 8/5/16.
 */


import {Question} from '../';
export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: 'What type of shoes are you looking for?',
        options: [
            {id: 501, text: "Sandals"},
            {id: 502, text: "Athletic"},
            {id: 503, text: "Kids"},
            {id: 504, text: "Casual"},
            {id: 505, text: "Work Shoes"},
            {id: 506, text: "Something Else"},
        ],
        nextQuestion: 2
    },
    {
        id: 2,
        text: 'What is your arch type from the I-Step Scan or picture on screen?',
        options: [
            {id: 201, text: "High"},
            {id: 202, text: "Medium"},
            {id: 203, text: "Low"},
        ],
        nextQuestion: 5
    },
    {
        id: 5, text: 'Do you have knee pain',
        options: [
            {id: 501, text: "Yes", nextQuestion: 25},
            {id: 502, text: "No"}
        ],
        nextQuestion: 2
    },
    {
        id: 25, text: 'What type of knee pain?',
        options: [
            {id: 701, text: "Inside of knee"},
            {id: 702, text: "Outside of knee"},
            {id: 703, text: "Front of knee"},
        ],
        nextQuestion: 2
    },
    {
        id: 15, text: 'Magneta',
        options: [
            {id: 501, text: "Sandals"},
            {id: 502, text: "Athletic"},
            {id: 503, text: "Kids"},
            {id: 504, text: "Casual"},
            {id: 505, text: "Work Shoes"},
            {id: 506, text: "Something Else"},
        ],
        nextQuestion: 2
    },
    {
        id: 16, text: 'RubberMan',
        options: [
            {id: 501, text: "Sandals"},
            {id: 502, text: "Athletic"},
            {id: 503, text: "Kids"},
            {id: 504, text: "Casual"},
            {id: 505, text: "Work Shoes"},
            {id: 506, text: "Something Else"},
        ],
        nextQuestion: 2
    },
    {
        id: 17, text: 'Dynama',
        options: [
            {id: 501, text: "Sandals"},
            {id: 502, text: "Athletic"},
            {id: 503, text: "Kids"},
            {id: 504, text: "Casual"},
            {id: 505, text: "Work Shoes"},
            {id: 506, text: "Something Else"},
        ],
        nextQuestion: 2
    }
];
