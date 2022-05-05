const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {' '}
      {blogs.map(blog => (
        <div key={blog.id} className="blog-preview">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;