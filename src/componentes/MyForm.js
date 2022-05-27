import React, { useState } from 'react'
import './Myform.css';

const MyForm = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [inf, setInfo] = useState("");
    const [prod, setProd] = useState("");



    const handleName = (e) => {
        setNome(e.target.value);
    };



    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(nome);
        console.log(email);
        console.log(inf);
        console.log(prod);
    };


    return (
        /*1-Criando Form*/
        /*1-Label envolvendo input*/
        <div>
            <form onSubmit={handleOnSubmit} >
                <h1>Formulário</h1>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} />
                </div>
                <label> <span htmlFor='email'>Email:</span>
                    <input type="email" name='email' placeholder='Digite o seu email'
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <div>
                    <label htmlFor='textArea'>Informação:</label>
                    <textarea type="textArea" name="textArea" onChange={(e) => setInfo(e.target.value)} />
                </div>
                <label>
                    <span>Selecione um produto:</span>
                    <select onChange={(e) => setProd(e.target.value)} >
                        <option value="maça" >Maçã</option>
                        <option value="banana">Banana</option>
                        <option value="vergamota">Vergamota</option>
                        <option value="laranja">Laranja</option>
                        <option value="limão">Limão</option>
                    </select >
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>


    )
}

export default MyForm