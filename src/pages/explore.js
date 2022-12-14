import React from 'react';
import Layout from '../components/shared/Layout';
import ExploreGrid from '../components/explore/ExploreGrid';
import ExploreSuggestions from '../components/explore/ExploreSuggestions';

export default function ExplorePage() {
  return (
    <Layout>
      <ExploreSuggestions />
      <ExploreGrid />
    </Layout>
  );
}
