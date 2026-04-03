// -------------------------
// Class Question
// The Question class represents a single question that will be shown
// to the user in the questionnaire. Each question contains its own
// list of Answer objects.
//
// Example:
// Question: "What is your status?"
// Answers:
//   1: "Tutkinto-opiskelija"
//   2: "Alumni"
//   3: "Ei kumpikaan"
// -------------------------

export class Question {
  constructor(id, text, multipleChoice = false, answers = []) {
    this.id = id;
    this.text = text; //The question text displayed to the user (e.g., "What is your status?").
    this.multipleChoice = multipleChoice; // Defines whether the user can select more than one answer (true/false).
    this.answers = answers; // An array of Answer objects representing all possible answer options.
  }

  addAnswer(answer) {
    // Adds a new Answer object to the list of possible answers for this question
    this.answers.push(answer);
  }
}
