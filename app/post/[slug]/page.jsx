import React from "react";
import MDXComponents from "@/utils/mdxcomponents";

import Header from "./Headerr";
import { allPosts, Post } from "contentlayer/generated";
import PostNotFound from "@/components/PostNotFound";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  return { title: post?.title, description: post?.description };
};

function page({ params }) {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  //   <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
  //   <Mdx code={project.body.code} />
  // </article>

  let MDXContent;

  if (!post) {
    return <PostNotFound />;
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }
  return (
    <div>
      <Header post={post} />

      <article className="text-white max-w-2xl mx-auto">
        <MDXContent components={{ ...MDXComponents }} />
      </article>
    </div>
  );
}

export default page;
