import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";
import AddPerson from "../app/components/AddPerson";
console.log(AddPerson);
const stories = storiesOf("AddPerson", module);

stories.addDecorator(withKnobs);

stories.add("Add Person Form", () => <AddPerson />);
