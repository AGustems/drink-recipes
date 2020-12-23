import React from 'react'
import CategoryProvider from './context/CategoryContext'
import RecipeProvider from './context/RecipeContext'
import ModalProvider from './context/ModalContext'

import Header from './components/Header'
import Form from './components/Form'
import RecipeList from './components/RecipeList'

function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <ModalProvider>
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <RecipeList/>
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
