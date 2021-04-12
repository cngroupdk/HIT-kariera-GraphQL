import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

import { HomeTemplate } from 'src/templates/HomeTemplate';

const QUACKS_QUERY = gql`
  query Quacks {
    quacks {
      id
      createdAt
      text

      user {
        id
        name
        userName
        profileImageUrl
      }
    }
  }
`;

const QUACK_MUTATION = gql`
  mutation Quack($text: String!) {
    addQuack(text: $text) {
      id
    }
  }
`;

export function HomePage() {
  const quacksState = useQuery(QUACKS_QUERY);

  const [quackFormText, setQuackFormText] = useState('');
  const [postQuack, postQuackState] = useMutation(QUACK_MUTATION, {
    onCompleted: () => {
      setQuackFormText('');
      quacksState.refetch();
    },
  });

  return (
    <HomeTemplate
      data={quacksState.data}
      error={quacksState.error}
      loading={quacksState.loading}
      refetchQuacks={() => quacksState.refetch()}
      quackFormState={{
        text: quackFormText,
        setText: setQuackFormText,
        error: postQuackState.error,
        loading: postQuackState.loading,
        onSubmit: ({ text }) => {
          postQuack({ variables: { text } });
        },
      }}
    />
  );
}
