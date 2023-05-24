React- redux
1- install reduxjs/toolkit
2- install react redux
3-create utils folder
4- In utils we will create another file name store and expoert that
5- on store we use configure Api
E.g
const store = configureStore ({
// it takes reduces(we import slice reducer here )
})

6. Now we create a slice with which name we want (Not special name mandotry)
7. here we will use create Slice Apl
   E.g <const appslice = createSlice({
   name:"App"(whatever name we want )
   initialState :{
   isMenuOpen : Flase } (we use isMenuOpen Flag for the toggale perpuse)
   }
   reducers :{
   toggleMenu:(state)=>{
   state.isMenuOpen = !state.isMenuOpen

   }>

   //it always name as reducers and here we define actions as function >

   }) 8. than we export this name export reduces (export default appSlice.reducer) and export action on reducers E.g const {toggleMenu} = appSlice.actions;
   9 . now we provide our store to app by using <Provider store= {store} in App.js>

   10. Dispach and anction where we want to use that
   11. Use in the component which get affected by 10point ===>> use useSelectore to for suscribe that specific action from store
