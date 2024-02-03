import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from '.';
type Story = StoryObj<typeof meta>;

const meta = {
    title: 'organisms/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProductCard>;

export default meta;

export const Primary: Story = {
    args: {
        id: 1,
        imagePath: 'test',
        title: 'test',
        price: 1000
    },
};