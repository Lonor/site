import Header from "./header";

export default function Layout(props) {
  const { children, title, vertical, blog } = props;
  return (
    <>
      <Header title={title} blog={blog} />
      <main
        className={`prose prose-slate
      max-w-3xl
      dark:prose-invert
      prose-pre:rounded-none 
      prose-pre:bg-[#0d1117] 
      prose-p:before:content-none
      prose-headings:[*>a]:no-unnderline
      prose-blockquote:border-purple-600
      prose-blockquote:text-purple-600
      prose-blockquote:not-italic
      ${
        vertical
          ? "prose-blockquote:border-t-2 prose-blockquote:border-l-0 prose-blockquote:pt-4 prose-blockquote:pl-0"
          : "prose-blockquote:border-l-2 mb-24 mx-6"
      }`}
      >
        <div className="my-6">{children}</div>
      </main>
    </>
  );
}
