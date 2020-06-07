import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { api } from '../../config/api';

interface Post {
   userId: string;
   id: string;
   title: string;
   body: string;
}
interface Props {
   post: Post;
}

const Post: React.FC<Props> = ({ post }) => {
   return (
      <>
         <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
         </div>
      </>
   );
};
export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await api.get<Post[]>('/posts');

   const paths = data.map(post => ({
      params: {
         postId: post.id,
      },
   }));

   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { data } = await api.get<Post[]>(`posts/${params.postId}`);

   return {
      props: {
         post: data,
      },
   };
};

//
