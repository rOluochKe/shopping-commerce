import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route
          exact
          path='/shop'
          element={<CollectionsOverview match={useMatch('/shop')} />}
        >
          <Route
            path=':collectionId'
            element={<CollectionPage match={useMatch('/:collectionId')} />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default ShopPage
