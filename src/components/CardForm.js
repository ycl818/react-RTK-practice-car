import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';


const CardForm = () => {

  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    console.log(state)
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  })

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  }

  const handleCostChange = (event) => {
    // integer user type in only, || prevent Nan(not a number)
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label htmlFor="" className="label">Name</label>
            <input
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label htmlFor="" className="label">Cost</label>
            <input
              className='input is-expanded'
              value={cost || 0}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CardForm