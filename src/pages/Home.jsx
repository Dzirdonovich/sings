import React from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoaderBlock, Navigation } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";



function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items);   
  const cartItems = useSelector(({ cart }) => cart.items);   
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);  
  const { category, sortBy} = useSelector(({ filters }) => filters);  
   
  const onSelectCategory = React.useCallback((index)=>{
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type)=>{
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj))
  }



  React.useEffect(() => {    
      dispatch(fetchPizzas(sortBy, category))   
    
  }, [category, sortBy]);
  
    return (
      
        <div className="container">
          <Navigation></Navigation>
        <div className="content__top">
          <Categories
            activeCategory= {category}
            onClickCategory={onSelectCategory}
            items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
          />
          <SortPopup 
          onChangeSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={[
            {name: "Популярности", type: "popular", order: "desc"},
            {name: "Цена", type: "price", order: "desc"},
            {name: "Алфавит", type: "name", order: "asc"}]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoaded ? 
            items.map(obj => 
            <PizzaBlock  
            onClickAddPizza={handleAddPizzaToCart} 
            inCartCount = {cartItems[obj.id] && cartItems[obj.id].items.length}
            key={obj.id} {...obj} />) :
            Array(12).fill(0).map((_, index) => 
            (<PizzaLoaderBlock key={index}/>))
            
          }
          
       
          
        </div>
      </div>
    )
}

export default Home
