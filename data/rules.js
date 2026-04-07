// data/rules.js
import { Rule } from "../models/Rule.js";
import { courses } from "./courses.js";

// Empti arrey to hold the rules
export const rules = [];

//-------------------------
// 1. Jos [ status = Tutkinto-opiskelija] ja [Kypsyysaste = olen kiinnostunut yrittäjyydestä, mutta minulla ei ole vielä ideaa]
// ja / tai [Tuentarve = Kaipaan perustietoa yrittäjyydestä ja siitä, mitä se vaatisi minulta],
// Level 1, Minustako yrittäjä, Realistic Business Idea
// -------------------------

// rule 1 -------------------------------
// IF:
// Status = 1 (Tutkinto-opiskelija)
// Kypsyysaste = 1 (Olen kiinnostunut yrittäjyydestä...)
// Tuentarve = 1 (Kaipaan perustietoa yrittäjyydestä...)
//
// → THEN "Minustako yrittäjä, Realistic Business Idea"
const rule1 = new Rule({
  id: 1,
  courses: [courses[2], courses[0]],
  levelId: 1,
});
rule1.addPair(1, 1); // q1 id=1, answer id=1
rule1.addPair(2, 1); // q2 id=2, answer id=1
rule1.addPair(3, 1); // q3 id=3, answer id=1

rules.push(rule1);

//-------------------------
// 2. Jos [ status = Tutkinto-opiskelija] ja [Kypsyysaste = olen kiinnostunut yrittäjyydestä, mutta minulla ei ole vielä ideaa]
// ja / tai [Tuentarve =Tarvitsen lisää yrittäjyysosaamista (esim. tuotteistaminen, markkinointi).],
// Level 1, Minustako yrittäjä, Realistic Business Idea, Yrittäjyyden TOP-opinnot
// -------------------------

// rule 2 -------------------------------
// IF:
// Status = 1 (Tutkinto-opiskelija)
// Kypsyysaste = 1 (Olen kiinnostunut yrittäjyydestä...)
// Tuentarve = 2 (Tarvitsen lisää yrittäjyysosaamista...)
// → "Minustako yrittäjä, Realistic Business Idea, Yrittäjyyden TOP-opinnot"
const rule2 = new Rule({
  id: 2,
  courses: [courses[2], courses[0], courses[4]],
  levelId: 1,
});
rule2.addPair(1, 1); // q1
rule2.addPair(2, 1); // q2
rule2.addPair(3, 2); // q3

rules.push(rule2);

//-------------------------
// 3. Jos [ status = Tutkinto-opiskelija] ja [Kypsyysaste = olen kiinnostunut yrittäjyydestä, mutta minulla ei ole vielä ideaa]
// ja / tai [Tuentarve =Tukea yrityksen perustamiseen],
// Level 1, Minustako yrittäjä, Realistic Business Idea, Yrittäjyyden TOP-opinnot
// -------------------------

// rule 3 -------------------------------
// IF:
// Status = 1 (Tutkinto-opiskelija)
// Kypsyysaste = 1 (Olen kiinnostunut yrittäjyydestä...)
// Tuentarve = 2 (Tukea yrityksen perustamiseen)
// → "Minustako yrittäjä, Realistic Business Idea, Yrittäjyyden TOP-opinnot"
const rule3 = new Rule({
  id: 3,
  courses: [courses[2], courses[0], courses[4]],
  levelId: 1,
});

rule3.addPair(1, 1); // q1
rule3.addPair(2, 1); // q2
rule3.addPair(3, 3); // q3

rules.push(rule3);

//-------------------------
// 4. Jos [ status = Tutkinto-opiskelija] ja [Kypsyysaste = olen kiinnostunut yrittäjyydestä, mutta minulla ei ole vielä ideaa]
// ja / tai [Tuentarve =Tarvitsen myyntikanavan tuotteilleni.] - 4 -,
// Taituri-verkkokauppa - 6 -
// -------------------------
const rule4 = new Rule({
  id: 4,
  courses: [courses[5]],
});
rule4.addPair(1, 1); // q1
rule4.addPair(2, 1); // q2
rule4.addPair(3, 4); // q3

rules.push(rule4);
