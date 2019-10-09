import React from 'react';
import {BrowserRouter as Router, router}from 'react-router-dom';
import Navbar from './componentes/Navbar';
import produtos from './componentes/Produtos';
import pagamentos from './componentes/Pagamentos';
import carrinho from './componentes/Carrinho';
import home from './componentes/home':

const App = (){
    return (
        <BrowsrRouter>
        <Navbar />
        <Router exact path="/pagamento" component={pagamento}/>
        <Router exact path="produtos" component={produtos}/>
        <Router exact path="carrinho" component={carrinho}/>
        </BrowsrRouter>
        
        )
}
export default App;
