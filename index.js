// Import models
import { Answer } from "./models/Answer.js";
import { Question } from "./models/Question.js";
import { Course } from "./models/Course.js";
import { Rule } from "./models/Rule.js";

// Import data
import { courses } from "./data/courses.js";
import { questions } from "./data/questions.js";
import { rules } from "./data/rules.js";

// Example of user answers
const userAnswers = [
  { questionId: 1, answerId: 1 },
  { questionId: 2, answerId: 1 },
  { questionId: 3, answerId: 1 },
  { questionId: 3, answerId: 2 },
];

// This function takes the user's selected answers and compares them against all defined rules to find matching courses.
function findMatchingCourses(userAnswers) {
  const matchedCourses = [];
  // iterate through each rule in the rules array
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]; // take the current rule
    let allMatch = true; // assume the rule matches (until proven otherwise)
    // Now check each pair (questionId + answerId) within the rule
    for (let j = 0; j < rule.rulePairs.length; j++) {
      const pair = rule.rulePairs[j]; // take one pair of conditions from the rule
      let foundMatch = false; // assume no match found yet
      // check if there is a matching answer from the user
      for (let k = 0; k < userAnswers.length; k++) {
        const ans = userAnswers[k]; // take one user answer

        // compare:
        // 1) do the questions match?
        // 2) do the answers match?
        if (
          ans.questionId === pair.questionId &&
          ans.answerId === pair.answerId
        ) {
          foundMatch = true; // match found!
          break;
        }
      }

      // If at least one pair of the rule does not match the user's answers, rule does not match,
      // so we can stop checking this rule and move to the next one.

      if (!foundMatch) {
        allMatch = false;
        break;
      }
    }
    // if all pairs of conditions match and the course of this rule is not yet added to the result, add it
    if (allMatch && !matchedCourses.includes(rule.course)) {
      matchedCourses.push(...rule.courses); // add the courses of this rule to the result
    }
  }

  return matchedCourses; // return the list of all matching courses
}

const result = findMatchingCourses(userAnswers);
console.log(result);
