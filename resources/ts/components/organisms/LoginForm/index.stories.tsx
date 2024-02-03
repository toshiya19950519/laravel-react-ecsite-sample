import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from '.';
type Story = StoryObj<typeof meta>;

const meta = {
    title: 'organisms/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof LoginForm>;

export default meta;

export const Primary: Story = {
    args: {
    },
};