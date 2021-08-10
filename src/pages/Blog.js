import styled from "styled-components";
import { Link } from "react-router-dom";
const ContainerBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ul {
    width: 21%;
  }
  @media (max-width: 640px) {
    ul {
      width: 35%;
    }
  }
  ul > li {
    list-style-type: none;
  }
  ul > li > p > a {
    color: inherit;
    text-decoration: none;
  }
  ul > li > a {
    color: inherit;
    text-decoration: none;
  }
  ul > li > p > a > span {
    border-radius: 2px;
    background-color: grey;
    cursor: pointer;
    padding: 1px 5px;
  }
`;

const Blog = () => {
  return (
    <ContainerBlog>
      <ul>
        <li>
          <Link to="/blog/1">
            <h1>Başlık - 1</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/1">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/2">
            <h1>Başlık - 2</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/2">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/3">
            <h1>Başlık - 3</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/3">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/4">
            <h1>Başlık - 4</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/4">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/5">
            <h1>Başlık - 5</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/5">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/6">
            <h1>Başlık - 6</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/6">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/7">
            <h1>Başlık - 7</h1>
          </Link>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciend...
            <Link to="/blog/7">
              <span>Read More</span>
            </Link>
          </p>
        </li>
      </ul>
    </ContainerBlog>
  );
};

export default Blog;
