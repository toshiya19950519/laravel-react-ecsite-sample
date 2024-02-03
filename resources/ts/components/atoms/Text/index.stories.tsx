import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import Text from '.';

type Story = StoryObj<typeof meta>;

const meta = {
    title: 'atoms/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
    },
} satisfies Meta<typeof Text>;

export default meta;

export const Primary: Story = {
    args: {
        fontSize: 'medium',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        color: 'red',
        label: 'テスト',
    }
}