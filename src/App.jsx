import React, { useState, useEffect } from "react";
import { AppHeader } from './assets/Components/AppHeader'
import { AppMain } from './assets/Components/AppMain'
import { AppFooter } from './assets/Components/AppFooter'
import Spinner from './assets/Components/Spinner'



export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Esperar 3 segundos antes de mostrar el contenido
  }, []);

  return (
    
    <div onLoad={() => setLoading(false)}>
        {loading && <Spinner />}
        <AppHeader  />
        <AppMain />
        <AppFooter />
    </div>
  )
}
