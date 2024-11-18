import styled from "styled-components";

// Estilos para o container principal
export const HomeStyle = styled.section`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;



export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5vh;
  width: 50%;
  color: white;
  border: none;  /* Usar 'none' se não quiser bordas visíveis */
  border-radius: 50px;  /* Aumentei o valor para bordas bem arredondadas */
  cursor: pointer;
  font-size: 1em;
  background-color: #037143;
  transition: background-color 0.3s ease, transform 0.2s ease;  /* Efeito de transição para interações mais suaves */

  &:hover {
    background-color: #025e36;  /* Cor de fundo muda no hover */
    transform: scale(1.05);  /* Botão aumenta um pouco no hover */
  }
`;


// Estilos para a div com o fundo vermelho
export const ImageContainer = styled.div`
  position: absolute;
  top: 52%;  /* Ajuste conforme necessário */
  left: 70%; /* Ajuste conforme necessário */
  width: 600px; 
  height: 600px;
  background-color: #037143;
;
  border-radius: 100%;
  z-index: 0; 
`;


// Estilos para a imagem com o efeito 3D
export const Image = styled.img`
  position: absolute;
  width: 60%;
  height: auto;
  top: 20%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;  
  border: solid;
  
  span {
    font-size: 2em;
    color: #037143;
  }
`;

