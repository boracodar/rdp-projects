import "./styles.css";

function Post(props) {
  return (
    <article>
      <h2>{props.title}</h2>

      {props.children}
    </article>
  );
}

export default Post;
