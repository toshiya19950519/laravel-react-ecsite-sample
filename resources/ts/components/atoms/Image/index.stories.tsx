import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
type Story = StoryObj<typeof meta>;

import Image from ".";

const meta = {
    title: 'atoms/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    },
} satisfies Meta<typeof Image>;

export default meta;

export const Primary: Story = {
    args: {
        src:'https://via.placeholder.com/1000',
        width:100,
        height:100,
        alt:'test',
    },
};