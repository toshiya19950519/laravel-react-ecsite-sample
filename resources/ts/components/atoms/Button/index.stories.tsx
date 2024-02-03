import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
type Story = StoryObj<typeof meta>;

import Button from '.';

const meta = {
    title: 'atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>;

export default meta;

export const Small: Story = {
    args: {
        children: 'Button',
        size: 'small', // サイズをsmallに設定
    },
};

export const Medium: Story = {
    args: {
        children: 'Button',
        size: 'medium', // サイズをmediumに設定
    },
};

export const Large: Story = {
    args: {
        children: 'Button',
        size: 'large', // サイズをlargeに設定
    },
};
