import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import LoginForm, { Footer } from '.';
type Story = StoryObj<typeof meta>;

const meta = {
    title: 'organisms/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Footer>;

export default meta;

export const Primary: Story = {
    args: {
    },
};