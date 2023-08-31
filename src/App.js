import Router1 from './router/Router1'
import Provider from './context/Provider';
import Footer from './Footer';


function App() {
  return (
 <div> 
 <Provider>
 <div className='bg'> 
   <Router1/>
   </div>
 </Provider>
 <div className='Footer-b'>
  <Footer />
 </div>
 </div>

  );
}

export default App;
