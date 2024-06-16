import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
}

function App() {

  const [fullName, setFullName] = useState<string>(''); //Explicação: O estado fullName é criado para armazenar o nome completo do usuário. Inicialmente, ele é uma string vazia.

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
  }); //Explicação: O estado formData é criado para armazenar os valores dos inputs do formulário. Inicialmente, ele é um objeto com as propriedades firstName e lastName, ambas com valor vazio.

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault(); //Explicação: O evento padrão de submit de formulário é cancelado para que a página não seja recarregada.
    setFullName(`${formData.firstName} ${formData.lastName}`); //Explicação: O nome completo do usuário é montado e armazenado no estado fullName.
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputChange} //Explicação: O evento onChange é disparado toda vez que o valor do input é alterado. Quando isso acontece, a função handleInputChange é chamada e o valor do input é atualizado no estado.
          />
        </div>
        <div>
          <input
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Digite seu sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Mostrar nome completo</button>
      </form>
      <h2>{fullName}</h2>
    </>
  )
}

export default App