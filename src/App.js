import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {
  
  const [Itens,setItens] = useState(0);
  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
    //setItens(Itens);
  },[]);
  
  //console.log(Itens);
  return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca qtdCarrinho={Itens}/>
      <GradeProdutos listaProdutos={produtos} qtdCarrinho={Itens} setItens={setItens}/>
    </div>
  );
}

export default App;
