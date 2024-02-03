import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
type Story = StoryObj<typeof meta>;

import Input from '.';


const meta = {
    title: 'atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        id: { control: 'text' },
        type: { control: 'text' },
        placeholder: { control: 'text' },
        value: { control: 'text' },
        errorMessage: {
          control: 'text',
          description: 'エラーメッセージ',
        }
      },
} satisfies Meta<typeof Input>;

export default meta;

export const Text: Story = {
    args: {
        id: 'text',
        type: 'text',
        placeholder: 'Enter text',
        value: '',
        onChange: () => {},
    },
};

export const email: Story = {
    args: {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        value: '',
        onChange: () => {},
    },
};

export const error: Story = {
    args: {
        id: 'error',
        type: 'text',
        placeholder: 'Enter text',
        value: '',
        onChange: () => {},
        errorMessage: 'This field is required', // エラーメッセージを追加
      },
};
