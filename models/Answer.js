// -------------------------
// Class Answer
// The Answer class represents a single answer option for a question.
// Each question contains its own list of Answer objects.
// For the question "What is your status?", one possible answer could be:
//  id: 1,
//  text: "Tutkinto-opiskelija"
// -------------------------
export class Answer {
  constructor(id, text) {
    this.id = id;
    this.text = text; //The visible text that will be shown to the user in the UI
  }
}
