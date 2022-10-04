import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { AvatarUI } from "UI/AvatarUI/AvatarUI";
import GithubLink from "../../components/GithubLink/GithubLink";

//! EXTEND InputUI
export default {
  title: "Example/AvatarUI",
  component: AvatarUI,
  argTypes: {
    id: {
      description: "user id (ссылка на профиль если контейнер тегом href)",
    },
    size: {
      description: "размер",
    },
    src: {
      description: "BASER_URL + ссылка на фотку",
    },
    isAvatarHref: {
      description: "a or div",
    },
    styleComponents: {
      description: "дефолтные стили",
    },
  },
} as ComponentMeta<typeof AvatarUI>;

const TemplateCheckboxUI: ComponentStory<typeof AvatarUI> = (args) => {
  return (
    <>
      <GithubLink componentName="AvatarUI" />
      <AvatarUI {...args} />
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  id: 1,
  name: "Robert",
  size: "large",
  surname: "Arbuzer",
  src: "https://api.lorem.space/image/game?w=150&h=220",
};
