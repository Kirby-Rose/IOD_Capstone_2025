"use strict";
import Animal from "./animal.js";
import Contact from "./contact.js";
import Status from "./status.js";
import HomeYard from "./homeYard.js";
import AdoptionApplicant from "./adoptionApplicant.js";
import FosterCarer from "./fosterCarer.js";
import CareProvision from "./careProvision.js";
import Surrendering from "./surrendering.js";
import Identify from "./identify.js";
import Medical from "./medical.js";
import Personality from "./personality.js";

async function init() {
  await Animal.sync();
  await Contact.sync();
  await Status.sync();
  await HomeYard.sync();
  await AdoptionApplicant.sync();
  await FosterCarer.sync();
  await CareProvision.sync();
  await Surrendering.sync();
  await Identify.sync();
  await Medical.sync();
  await Personality.sync();
}

init();

export {
  Animal,
  Status,
  HomeYard,
  AdoptionApplicant,
  FosterCarer,
  CareProvision,
  Surrendering,
  Contact,
  Identify,
  Medical,
  Personality,
};
