import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store"; 


const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data; 
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  };

  const renderCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button 
          className="button is-danger"
          onClick={()=> handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })

  

  return (
    <div className="car-list">
      { renderCars }
      <hr/>
    </div>
  )
}

export default CardList