import styled from "styled-components";
const Container = styled.div`
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
const About = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Yazi theme={theme}>Hi there, I'm Oğuzcan Uzunöner 👋</Yazi>
      <Icerik theme={theme}>
        - 🎓 I'm currently studying at Karadeniz Technical University Management
        Information Systems.
        <br />
        <br /> - 🔭 I'm currently working to become a Full Stack Developer.
        <br /> <br />- 💬 Ask me about React, Bootstrap, HTML, CSS, JavaScript,
        PHP, PHP Mailer, MySQL, SQL Server, Python, Flask, Tkinter, WordPress,
        LimeSurvey, Moodle, OpenCart.
        <br /> <br />- ⚡ Fun fact: I love to sing and play guitar, drums and
        harmonica. I love to watch tv-series.
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
    </Container>
  );
};

export default About;
