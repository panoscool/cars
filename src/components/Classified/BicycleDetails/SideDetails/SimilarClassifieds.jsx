import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import SimilarClassifiedsList from './SimilarClassifiedsList'
import { fetchBicycles } from '../../../../store/actions/bicycleActions'

const SimilarClassifieds = ({ bicycles, fetchBicycles }) => {
  useEffect(() => {
    fetchBicycles()
  }, [fetchBicycles])

  return (
    <Fragment>
      {bicycles.map(item => (
        <SimilarClassifiedsList
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.manufacturer}
          price={item.price}
          purchased={item.purchased}
        />
      ))}
    </Fragment>
  )
}

const mapStateToProps = ({ bicycleReducer }) => ({
  bicycles: bicycleReducer.bicycles
})

export default connect(mapStateToProps, { fetchBicycles })(SimilarClassifieds)
