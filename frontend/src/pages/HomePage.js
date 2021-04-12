import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

import { HomeTemplate } from 'src/templates/HomeTemplate';

export function HomePage() {
  const [quackFormText, setQuackFormText] = useState('');

  return (
    <HomeTemplate
      data={staticData}
      error={null}
      loading={false}
      refetchQuacks={() => {}}
      quackFormState={{
        text: quackFormText,
        setText: setQuackFormText,
        error: null,
        loading: false,
        onSubmit: ({ text }) => {
          console.log('--- text', text);
        },
      }}
    />
  );
}

const staticData = {
  quacks: [
    {
      id: 1,
      createdAt: new Date().toISOString(),
      text: 'Mock Quack.',
      user: {
        id: 3,
        name: 'Mock User',
        userName: 'mock',
        profileImageUrl: 'http://mrmrs.github.io/photos/p/3.jpg',
      },
    },
  ],
};
