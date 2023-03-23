import React, { useEffect } from 'react';
import { flattenArray } from '@junibrosas/helpers/src';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyContent } from '@junibrosas/core/src/empty-content';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'EmptyContent',
  component: EmptyContent,
} as ComponentMeta<typeof EmptyContent>;

export const Primary: ComponentStory<typeof EmptyContent> = () => {

  useEffect(() => {
    const flatten = flattenArray([
      { name: 'hello' },
      {
        name: 'world',
        details: {
          image: 'image-hero'
        }
      }]);

    console.log(flatten);
  }, []);

  return (
    <EmptyContent title="Hello World" description="I will destroy the whole world" />
  )
};