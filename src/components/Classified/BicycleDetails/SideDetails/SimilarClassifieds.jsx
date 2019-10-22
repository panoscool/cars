import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SimilarClassifiedsList from './SimilarClassifiedsList'
import { fetchBicycles } from '../../../../store/actions/bicycleActions'

const SimilarClassifieds = () => {
  const dispatch = useDispatch();
  const { bicycles } = useSelector(state => state.bicycleReducer);

  useEffect(() => {
    dispatch(fetchBicycles());
  }, [dispatch])

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

export default SimilarClassifieds;
