import styled from "styled-components";
import { useParams } from "react-router-dom";

const SingleBlog = ({ theme }) => {
  const ContainerSingle = styled.div`
    height: 500px;
    max-width: 700px;
    background-color: ${(props) =>
      props.theme === "light" ? "wheat" : "#121c1f"};
    border-radius: 5px;
    padding: 5px;
    margin: 5px auto;
    @media only screen and (max-width: 640px) {
      max-width: 100%;
      font-size: 8px;
    }
  `;
  const Yazi = styled.h1`
    color: ${(props) => (props.theme === "light" ? "#121c1f" : "wheat")};
    display: block;
  `;
  const Icerik = styled.p`
    color: ${(props) => (props.theme === "light" ? "#121c1f" : "wheat")};
    @media only screen and (max-width: 600px) {
      font-size: 15px;
    }
  `;
  const { id } = useParams();
  return (
    <ContainerSingle theme={theme}>
      <Yazi theme={theme}> Başlık - {id}</Yazi>
      <Icerik theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero
        ratione natus in expedita molestiae, beatae eos ipsum ad corrupti
        voluptatum omnis. Autem aliquam enim cum, repudiandae sapiente sequi.
        Architecto animi distinctio, perspiciatis, molestiae sed sequi ut ipsam
        quo fuga dolore soluta facilis dolorum tempore consequuntur, iusto
        voluptatem accusantium omnis! Nam modi incidunt dolorem optio placeat
        fugit aspernatur laboriosam quae earum. Rem error perspiciatis, modi
        assumenda vel aut temporibus consequuntur quia voluptate itaque laborum,
        praesentium velit beatae, quisquam eaque voluptates cumque delectus
        voluptatem autem distinctio. Placeat id laboriosam saepe! Reiciendis
        accusamus labore accusantium tenetur corrupti quo optio harum sapiente
        quae!
      </Icerik>
    </ContainerSingle>
  );
};

export default SingleBlog;
