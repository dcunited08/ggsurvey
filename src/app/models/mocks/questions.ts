/**
 * Created by dcook on 8/5/16.
 */


import {Question} from '../';
import {Questiontypes} from '../questiontypes.enum';
export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: 'How are you today? What type of shoes are you looking for?',
        options: [
            {id: 501, text: "Sandals"},
            {id: 502, text: "Athletic"},
            {id: 503, text: "Kids"},
            {id: 504, text: "Casual"},
            {id: 505, text: "Work Shoes"},
            {
                id: 506,
                text: "Something Else",
                nextQuestion: 155
            },
        ],
        nextQuestion: 3,
        type: Questiontypes.SingleSelect
    },
    {
        id: 155,
        text: "Ok help them with that and then say 'Well when you are in the market for shoes we have a fit process where we scan your feet and we have an app that we are developing that helps us match your feet, knees, and back with shoes that are good for you.  When you are in for shoes next time we can do that.'",
        options: [
            {id: 1, text: "Next"}
        ],
        nextQuestion: 3,
        type: Questiontypes.SingleSelect
    },
    {
        id: 2,
        text: '',
        options: [
            {id: 221, text: "Yes"},
            {id: 222, text: "No"}
        ],
        nextQuestion: 3,
        type: Questiontypes.SingleSelect

    },
    {
        id: 3,
        text: 'What is your arch type from the I-Step Scan or picture on screen?',
        options: [
            {id: 201, text: "High"},
            {id: 202, text: "Medium"},
            {id: 203, text: "Low"},
        ],
        nextQuestion: 5,
        type: Questiontypes.SingleSelect
    },
    {
        id: 5, text: 'Do you have knee pain',
        options: [
            {id: 501, text: "Yes", nextQuestion: 25},
            {id: 502, text: "No"}
        ],
        nextQuestion: 6,
        type: Questiontypes.SingleSelect
    },
    {
        id: 25, text: 'What type of knee pain?',
        options: [
            {id: 701, text: "Inside of knee"},
            {id: 702, text: "Outside of knee"},
            {id: 703, text: "Front of knee"},
        ],
        nextQuestion: 6,
        type: Questiontypes.SingleSelect
    },
    {
        id: 6, text: 'Do you have back pain?',
        options: [
            {id: 601, text: "Yes"},
            {id: 602, text: "No"}
        ],
        nextQuestion: 7,
        type: Questiontypes.SingleSelect
    },
    {
        id: 7, text: 'Do you have foot pain?',
        options: [
            {id: 701, text: "Yes", nextQuestion: 71},
            {id: 702, text: "No"}
        ],
        nextQuestion: 9,
        type: Questiontypes.SingleSelect
    },
    {
        id: 71, text: 'What type of Foot Pain?',
        options: [
            {id: 501, text: "Top of Foot"},
            {id: 502, text: "Bottom of Heel"},
            {id: 503, text: "Outside of foot"},
            {id: 504, text: "Plantar Fasciitis", nextQuestion: 72},
            {id: 505, text: "Morton’s Neuroma"},
        ],
        nextQuestion: 9,
        type: Questiontypes.SingleSelect
    },
    {
        id: 72, text: 'What do you plan to do in your shoes?',
        options: [
            {id: 721, text: "Listen to them and ask more questions if needed."}
        ],
        nextQuestion: 9,
        type: Questiontypes.SingleSelect
    },
    {
        id: 9, text: 'What type of socks do you like? (mark all that apply)',
        options: [
            {id: 901, text: "Loose socks"},
            {id: 902, text: "Tight socks"},
            {id: 903, text: "Thick socks"},
            {id: 904, text: "Thin socks"},
            {id: 905, text: "Low cut"},
            {id: 906, text: "High cut"}
        ],
        nextQuestion: 10,
        type: Questiontypes.SingleSelect
    },
    {
        id: 10,
        text: 'What are the top two types of shoes you wear most. Get the shoes that they came for and bring out the second type they wear most as well?',
        options: [
            {id: 1001, text: "Athletic"},
            {id: 1002, text: "Heels"},
            {id: 1003, text: "Dress Casual"},
            {id: 1004, text: "Flip-flops"},
            {id: 1005, text: "Sandals"},
            {id: 1006, text: "Clogs"},
            {id: 1006, text: "Boots"}
        ],
        nextQuestion: 101,
        type: Questiontypes.SingleSelect
    },
    {
        id: 101,
        text: 'Now based on the I-Step and the above questions go get shoes and return with socks in their size with the appropriate products suggested above.  Before you leave to go get shoes hand the customer the specials.  They are located next to the benches (we are hoping they look at them while we are gone.) ',
        options: [
            {id: 1011, text: "Next"},
        ],
        nextQuestion: 11,
        type: Questiontypes.SingleSelect
    },
    {
        id: 11,
        text: 'How do the inserts I brought you feel on your feet – Choose the best description?',
        options: [
            {id: 1001, text: "They felt like they supported my feet"},
            {id: 1002, text: "They felt like a rock in my shoe"},
            {id: 1003, text: "They felt bad on my arch"},
            {id: 1004, text: "They pushed my foot into the top of my shoe uncomfortably"},
            {id: 1005, text: "They felt like the arch was in the wrong place"},
        ],
        nextQuestion: 12,
        type: Questiontypes.SingleSelect
    },
    {
        id: 12,
        text: 'Do your toes or the front of your foot go numb when you exercise or walk?',
        options: [
            {id: 1001, text: "Yes"},
            {id: 1002, text: "No"},
        ],
        nextQuestion: 13,
        type: Questiontypes.SingleSelect
    },
    {
        id: 13,
        text: 'Do your shoes wear on the inside or the outside of the shoe first?',
        options: [
            {id: 1001, text: "The inside of my shoe"},
            {id: 1002, text: "The outside of my shoe"},
        ],
        nextQuestion: 14,
        type: Questiontypes.SingleSelect
    },
    {
        id: 14,
        text: 'Are you a heavy sleeper or a light sleeper?',
        options: [
            {id: 1001, text: "Light sleeper"},
            {id: 1002, text: "Heavy sleeper"},
        ],
        nextQuestion: 15,
        type: Questiontypes.SingleSelect
    },
    {
        id: 15,
        text: 'How much water do you drink a day? (1 glass = 12 ounces)',
        options: [
            {id: 1001, text: "3 or less glasses"},
            {id: 1002, text: "4 glasses or more"},
        ],
        nextQuestion: 16,
        type: Questiontypes.SingleSelect
    },
    {
        id: 16,
        text: 'Do any of your toes overlap?',
        options: [
            {id: 1001, text: "Yes"},
            {id: 1002, text: "No"},
        ],
        nextQuestion: 17,
        type: Questiontypes.SingleSelect
    },
    {
        id: 17,
        text: 'If they choose athletic shoes or they indicate they will walk, exercise, or run video their foot at this point.',
        options: [
            {id: 1001, text: "Next"},
        ],
        nextQuestion: 18,
        type: Questiontypes.SingleSelect
    },
    {
        id: 18,
        text: 'Do you have at least a ½ to a full thumb’s nail length between your longest toe and the end of your shoe? (DIRECTIONS: sit down with your shoes on, tap your heel against the ground, stand up with equal pressure on each foot, and feel for the size)',
        options: [
            {id: 1001, text: "I have between a ½ and a full thumb’s nail length"},
            {id: 1002, text: "I have less than ½ thumb nail length"},
            {id: 1004, text: "My toe is against the end of my shoe"},
            {id: 1005, text: "I have more than a full thumb’s length"},
        ],
        nextQuestion: 19,
        type: Questiontypes.SingleSelect
    },
    {
        id: 19,
        text: 'What size shoe did you measure for?',
        options: [
            {id:1901, text:"Women’s 5"},
            {id:1902, text:"Women’s 5.5"},
            {id:1903, text:"Women’s 6"},
            {id:1904, text:"Women’s 6.5"},
            {id:1905, text:"Women’s 7"},
            {id:1906, text:"Women’s 7.5"},
            {id:1907, text:"Women’s 8"},
            {id:1908, text:"Women’s 8.5"},
            {id:1909, text:"Women’s 9"},
            {id:1910, text:"Women’s 9.5"},
            {id:1911, text:"Women’s 10"},
            {id:1912, text:"Women’s 10.5"},
            {id:1913, text:"Women’s 11"},
            {id:1914, text:"Women’s 12"},
            {id:1915, text:"Men’s 7"},
            {id:1916, text:"Men’s 7.5"},
            {id:1917, text:"Men’s 8"},
            {id:1918, text:"Men’s 8.5"},
            {id:1919, text:"Men’s 9"},
            {id:1920, text:"Men’s 9.5"},
            {id:1921, text:"Men’s 10"},
            {id:1922, text:"Men’s 10.5"},
            {id:1923, text:"Men’s 11"},
            {id:1924, text:"Men’s 11.5"},
            {id:1925, text:"Men’s 12"},
            {id:1926, text:"Men’s 12.5"},
            {id:1927, text:"Men’s 13"},
            {id:1928, text:"Men’s 14"},
            {id:1929, text:"Men’s 15"}
        ],
        nextQuestion: 20,
        type: Questiontypes.SingleSelect
    },
    {
        id: 20,
        text: 'Is your foot hanging over the outside of the shoe to the point where it is uncomfortable?',
        options: [
            {id: 1001, text: "It is hanging over some -- Women’s D"},
            {id: 1002, text: "It is hanging over a lot -- Women’s 2E"},
            {id: 1003, text: "It is hanging over some -- Men’s 2E"},
            {id: 1004, text: "It is hanging over a lot -- Men’s 4E"},
        ],
        nextQuestion: 21,
        type: Questiontypes.SingleSelect
    },
    {
        id: 21,
        text: 'Does your heel ever slip in the shoe?',
        options: [
            {id: 1001, text: "Yes"},
            {id: 1002, text: "No"},
        ],
        nextQuestion: 100,
        type: Questiontypes.SingleSelect
    },
    {
        id: 100,
        text: "This is the end.",
        options: [],
        nextQuestion: 100,
        type: Questiontypes.SingleSelect

    }
];
