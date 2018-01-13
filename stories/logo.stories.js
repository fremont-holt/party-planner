import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";
var Logo = require("../app/components/Logo");

const stories = storiesOf("Logo", module);

stories.addDecorator(withKnobs);

stories.add("Default Logo", () => (
  <Logo height={text("Height", "95")} width={text("Width", "150")} />
));