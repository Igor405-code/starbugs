import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;

  img{
  width: 5vw;
  }
  

  nav {
    display: flex;
    justify-content: flex-end;

    ul {
      display: flex;
      gap: 30px; 
      align-items: center;

      li {
        font-family: "Arial", sans-serif;
        font-weight: bold;
        font-size: 1em;
        cursor: pointer;
      }
    }
  }

  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    nav {
      width: 100%;
      ul {
        justify-content: center;
        gap: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    nav {
      ul {
        flex-direction: column;
        gap: 15px;
      }
    }
  }
`;
