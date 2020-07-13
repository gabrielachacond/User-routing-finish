import React from "react";

class Posts extends React.Component {
  state = {
    posts: [],
    isLoading: true
  };

  componentDidMount() {
    this.getPostByUser();
  }

  componentDidUpdate(prevProps, prevState) {
    /**
     * Este metodo del ciclo de vida permite hacer operaciones
     * si en el componente ocurre algun cambio en el estado
     * o en sus props.
     *
     * Podemos usar este metodo para obtener de nuevo los posts
     * si el id del usuario ha cambiado en la ruta
     */
    console.log(this.props.match.params.id);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getPostByUser();
    }
  }

  getPostByUser() {
    // esta función debe:
    // 1. obtener el id proveniente del objeto match
    // 2. realizar el fetch con los posts
    // 3. setear en el estado los posts
    // 4. cambiar el valor de la variable isLoading

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(postList => {
        const posts = postList.filter(e => {
          return e.userId.toString() === this.props.match.params.id;
        });
        console.log(posts);
        this.setState({ posts, isLoading: false });
      });
  }

  render() {
    return (
      <>
        {/**
          Debemos implementar un mecanismo para limpiar los posts mostrados
        */}
        {!this.state.isLoading && (
          <div className="post-container">
            {this.state.posts.map(post => {
              return (
                <div key={post.id} className="post">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default Posts;
