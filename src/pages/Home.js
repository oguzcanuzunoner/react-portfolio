import styled from "styled-components";
import { Link } from "react-router-dom";
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
  p > a {
    color: inherit;
    text-decoration: none;
  }
  p > a > span {
    border-radius: 2px;
    background-color: grey;
    cursor: pointer;
    padding: 1px 5px;
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
const SecondYazi = styled.h2`
  color: ${(props) => (props.theme === "light" ? "#121c1f" : "wheat")};
`;
const Home = ({ theme }) => {
  return (
    <ContainerSingle theme={theme}>
      <Yazi theme={theme}> Blogs</Yazi>
      <SecondYazi theme={theme}>Last 3 Post : </SecondYazi>
      <Icerik theme={theme}>
        Başlık - 7 : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Reiciend...
        <Link to="/blog/7">
          <span>Read More</span>
        </Link>
      </Icerik>
      <Icerik theme={theme}>
        Başlık - 6 : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Reiciend...
        <Link to="/blog/6">
          <span>Read More</span>
        </Link>
      </Icerik>
      <Icerik theme={theme}>
        Başlık - 5 : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Reiciend...
        <Link to="/blog/5">
          <span>Read More</span>
        </Link>
      </Icerik>
      <Yazi theme={theme}>
        <br />
        <br />
        📫 Contact with Me
        <br />
        <br />
      </Yazi>
      <Icerik>
        <a
          href="https://www.linkedin.com/in/oguzcanuzunoner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/oguzcanuzunoner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt="github"
          />
        </a>

        <a
          href="https://instagram.com/oguzcanuzunoner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            alt="instagram"
          />
        </a>
      </Icerik>
    </ContainerSingle>
  );
};

export default Home;
