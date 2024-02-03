import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import Header from '.';
type Story = StoryObj<typeof meta>;

const meta = {
    title: 'organisms/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Header>;

export default meta;

export const Primary: Story = {
    args: {
    },
};