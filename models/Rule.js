// -------------------------
// Class Rule
// The Rule class represents a single recommendation rule in the system.
// Each rule connects a specific Course object with a set of question–answer
// combinations. When the user's selected answers match these pairs,
// the corresponding course should be recommended.
// Example of a rule:
// Rule ID: 1
// Course: "Realistic Business Idea"
//   Question 1: Status -> Answer: "Tutkinto-opiskelija"
//   Question 2: Kypsyysaste -> Answer: "Olen kiinnostunut yrittäjyydestä, mutta minulla ei ole vielä ideaa."
//   Question 3: Tuentarve -> Answer: "Kaipaan perustietoa yrittäjyydestä ja siitä, mitä se vaatisi minulta"
// -------------------------

export class Rule {
  constructor(id, courses = [], rulePairs = []) {
    this.id = id;
    this.courses = courses; // Array of Course objects to recommend when the rule matches
    this.rulePairs = rulePairs; // Array of { questionId, answerId }
  }

  addPair(questionId, answerId) {
    // Adds a new question–answer pair to the rule.
    this.rulePairs.push({ questionId, answerId });
  }

  addCourse(course) {
    // Adds a new course to the rule. might be useful IN FUTURE.
    this.courses.push(course);
  }

  addCourses(courses) {
    // Adds a new courses to the rule. might be useful if we want to add multiple courses to the same rule (IN FUTURE).
    this.courses.push(...courses);
  }
}
