import { Question } from "../models/Question.js";
import { Answer } from "../models/Answer.js";

// -------------------------
// Question 1: Status
// -------------------------
const q1 = new Question(
  1,
  "Status",
  false, // only one option can be selected
);

q1.addAnswer(new Answer(1, "Tutkinto-opiskelija"));
q1.addAnswer(new Answer(2, "Alumni"));
q1.addAnswer(new Answer(3, "Ei kumpikaan"));

// -------------------------
// Question 2: Kypsyysaste
// -------------------------
const q2 = new Question(2, "Kypsyysaste", false);

q2.addAnswer(
  new Answer(
    1,
    "Olen kiinnostunut yrittäjyydestä, mutta minulla ei ole vielä ideaa.",
  ),
);
q2.addAnswer(
  new Answer(2, "Minulla on idea, mutta kaipaan apua sen kehittämiseen."),
);
q2.addAnswer(
  new Answer(3, "Yrityksen perustaminen on ajankohtaista lähitulevaisuudessa."),
);
q2.addAnswer(new Answer(4, "Minulla on jo yritys."));

// -------------------------
// Question 3: Tuentarve
// (multiple selection allowed)
// -------------------------
const q3 = new Question(
  3,
  "Tuentarve",
  true, // multipleChoice
);

q3.addAnswer(
  new Answer(
    1,
    "Kaipaan perustietoa yrittäjyydestä ja siitä, mitä se vaatisi minulta.",
  ),
);
q3.addAnswer(
  new Answer(
    2,
    "Tarvitsen lisää yrittäjyysosaamista (esim. tuotteistaminen, markkinointi).",
  ),
);
q3.addAnswer(new Answer(3, "Tukea yrityksen perustamiseen."));
q3.addAnswer(new Answer(4, "Tarvitsen myyntikanavan tuotteilleni."));
q3.addAnswer(new Answer(5, "Tarvitsen rahoitusta ja sparrausta."));
q3.addAnswer(new Answer(6, "Kaipaan vertaistukea."));

// -------------------------
// Export all questions
// -------------------------
export const questions = [q1, q2, q3];
