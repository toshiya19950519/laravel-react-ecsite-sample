import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { LoadingSpinner } from '.';
type Story = StoryObj<typeof meta>;

const meta = {
    title: 'atoms/Spinner',
    component: LoadingSpinner
    ,
    parameters: {
        layout: 'centered',
    },
    
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

export const Primary: Story = {

};