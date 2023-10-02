import Produto from "../templates/Produto";
import { useState, useEffect } from "react";

export default function GradeProdutos(props){
    const [itens,setitens] = useState(0)
    //console.log(props.qtdCarrinho);
    //console.log(itens);
    //if(itens != 0)
    props.setItens(itens);

    if (props.listaProdutos){
        return(
            <div style={{
                width: '100%', 
                display: 'flex', 
                flexWrap: 'wrap',
                alignItems: 'center', 
                margin: '10px',
                padding: '10px',
                gap: '20px'}}>
                    {props.listaProdutos.map((produto) => (
                        <Produto key={produto.id} produto={produto} qtdCarrinho={itens} setItens={setitens}/>
                    ))}
            </div>
        )
    }
    else{
        return (<h1>Carregando...</h1>)
    }
}