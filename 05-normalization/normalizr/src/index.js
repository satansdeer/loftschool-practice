import React from "react";
import { render } from "react-dom";
import { normalize, schema } from "normalizr";
import JSONPretty from "react-json-pretty";

const blogposts = {
  id: 10,
  title: "My blogpost",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: 1,
    name: "John Doe"
  },
  comments: [
    {
      id: 1,
      author: "Rob",
      content: "Nice post!"
    },
    {
      id: 2,
      author: "Jane",
      content: "I totally agree with you"
    }
  ]
};

const authorSchema = new schema.Entity("authors");

const commentSchema = new schema.Entity("comments");

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema]
});

const normalizedBlogposts = normalize(blogposts, postSchema);

const App = () => (
  <div>
    blogposts:
    <JSONPretty json={blogposts} />
    normalized blogposts:
    <JSONPretty json={normalizedBlogposts} />
  </div>
);

render(<App />, document.getElementById("root"));
