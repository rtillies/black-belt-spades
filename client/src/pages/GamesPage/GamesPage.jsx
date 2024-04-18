import React, { useEffect } from 'react'
import spadesStore from '../../stores/spadesStore';
import Games from '../../components/Games/Games'

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
    <div>AllGames</div>
    <Games />
    </>
  )
}
