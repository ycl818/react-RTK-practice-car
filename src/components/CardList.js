import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store"; 


const CardList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form , cars: { data, searchTerm }}) => {
    const filteredCars =  data.filter((car) => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return {
      cars: filteredCars,
      name : form.name
    }
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  };

  const renderCars = cars.map((car) => {
    console.log(car)
    // Decide if this car should be bold
    // state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`${bold && 'bold'} panel`}>
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