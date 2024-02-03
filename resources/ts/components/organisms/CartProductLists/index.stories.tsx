import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import CartProductCard from '.';
type Story = StoryObj<typeof meta>;

const meta = {
    title: 'organisms/CartProductLists',
    component: CartProductCard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    },
} satisfies Meta<typeof Image>;

export default meta;

export const Primary: Story = {
    args: {
        image_path:'https://via.placeholder.com/1000',
        id:100,
        title:"test",
        amount:0,
        
    },
};