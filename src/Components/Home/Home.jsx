import { HomeStyle, Button, ImageContainer, Image, Titulo, ImageButton} from "./styled";
import laranja from "../../assets/images/laranjaB.png";

export default function Home() {
  return (
    <HomeStyle>
      <section>
        <Titulo>
          <h2>Mais que Café</h2>
          
          <h1>Isso é <span>Starbugs</span></h1>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <Button>Saiba Mais</Button>
        </Titulo>
        <ImageContainer>
          <Image src={laranja} alt="copo laranja" />
        </ImageContainer>

        <ImageButton>
            <button></button>
            <button></button>
            <button></button>
        </ImageButton>
      </section>
    </HomeStyle>
  );
}
