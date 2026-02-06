import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const DISPLAY_NAMES = {
  m365: 'M365',
  copilot: 'Copilot',
  minecraft: 'Minecraft',
  teams: 'Teams',
};

const VALID_CATEGORIES = Object.keys(DISPLAY_NAMES);

export default function PostList() {
  const { category } = useParams();

  if (!category || !VALID_CATEGORIES.includes(category)) {
    return <NotFound />;
  }

  const displayName = DISPLAY_NAMES[category] || category;

  return (
    <main>
      <h1>{displayName} Posts</h1>
      {/* Replace with actual posts list for the category */}
    </main>
  );
}
