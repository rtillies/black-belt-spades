import React, { useEffect } from 'react'
import spadesStore from '../../stores/spadesStore';
import Games from '../../components/Games/Games'
import Teams from '../../components/Teams/Teams';

export default function GamesPage() {
  const store = spadesStore();

  useEffect(() => {
    store.getData('conferences');
    store.getData('divisions');
    store.getData('teams');
    store.getData('games');
  }, []);

  return (
    <>
    <div>All Games</div>
    <Teams />
    <Games />
    </>
  )
}
