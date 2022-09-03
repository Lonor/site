import NextImage from "next/image";
import Link from "next/link";
import Layout from "./layout";
import withView from "./withView";
import "highlight.js/styles/github-dark.css";

export default withView(
  ({ children, title, date, author, view, id, vertical }) => {
    return (
      <Layout blog title={title} id={id} vertical>
        <div className={`blog ${vertical ? "vertical" : ""}`} id={id}>
          <h3>{title}</h3>
          <div className="flex justify-start items-center flex-wrap">
            <div className="flex flex-2 items-center justify-center cursor-pointer">
              <Link href={"/about"}>
                <div className="flex items-center justify-start flex-wrap">
                  <small className="w-25 h-25 mt-1">
                    <NextImage
                      className="rounded-full"
                      src={`/images/author/${author}.jpg`}
                      width={25}
                      height={25}
                      alt={author}
                    ></NextImage>
                  </small>
                  <small className={`${vertical ? "mt-2" : "ml-2"}`}>
                    {author}
                  </small>
                  <small className="before:content-['/'] before:p-0 before:m-2">
                    {date}
                  </small>
                </div>
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="pr-2 flex justify-end">
              {view > 0 && <small>{view} views</small>}
            </div>
          </div>
          <div className="article">{children}</div>
        </div>
      </Layout>
    );
  }
);
