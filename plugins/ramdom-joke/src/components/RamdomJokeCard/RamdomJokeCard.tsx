import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-use';
import { InfoCard } from '@backstage/core-components';
import { fetchApiRef, useApi } from '@backstage/core-plugin-api';

export const RamdomJokeCard = () => {
  const fetchApi = useApi(fetchApiRef);

  const state = useAsync(async () => {
    const response = await fetchApi.fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await response.text();
    return joke;
  }, []);

  return (
    <InfoCard>
      {state.loading ? (
        <div>loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : (
        <div> {state.value}</div>
      )}
    </InfoCard>
  );
};
