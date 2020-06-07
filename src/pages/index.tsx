/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { useCallback } from 'react';

import asideImage from '../assets/Bitmap.png';
import cardImg from '../assets/card.png';
import Header from '../components/Header';
import Main from '../components/Main';
import { api } from '../config/api';
import { Card, Content, Feed, SideBar } from '../styles/_styles';
import { GlobalStyle } from '../styles/global';

export interface Post {
   userId: string;
   id: string;
   title: string;
   body: string;
}

interface Props {
   posts: Post[];
}

const pages: React.FC<Props> = ({ posts }) => {
   return (
      <>
         <GlobalStyle />
         <Header />
         <Main />
         <Feed>
            <Content>
               {posts.map(array => (
                  <Card key={array.id}>
                     <div>
                        <img src={cardImg} alt="" />
                        <span>{array.title}</span>
                        <p>{array.body}</p>
                        <ul>
                           <li>{array.userId}</li>
                           <li> By Rickie Baroch</li>
                        </ul>
                        <br />
                        <Link href="/post/[postId]" as={`/post/${array.id}`}>
                           More..
                        </Link>
                     </div>
                  </Card>
               ))}
            </Content>

            <SideBar>
               <div>
                  <div className="title">
                     <h3>About Autor</h3>
                  </div>

                  <div className="card-content">
                     <img src={asideImage} alt="" />
                     <strong>Kate Willems</strong>
                     <span>Food cooking bloger</span>
                     <p>
                        Hi,I'm Sonia. Cooking is the way I express my creative
                        side to the world. Welcome to my Kitchen Corner on…
                     </p>
                     <a href="#">Continue Reading</a>
                  </div>
                  <div className="title">
                     <h3>About Autor</h3>
                  </div>

                  <div className="card-content">
                     <img src={asideImage} alt="" />
                     <strong>Kate Willems</strong>
                     <span>Food cooking bloger</span>
                     <p>
                        Hi,I'm Sonia. Cooking is the way I express my creative
                        side to the world. Welcome to my Kitchen Corner on…
                     </p>
                     <a href="#">Continue Reading</a>
                  </div>
                  <div className="title">
                     <h3>About Autor</h3>
                  </div>

                  <div className="card-content">
                     <img src={asideImage} alt="" />
                     <strong>Kate Willems</strong>
                     <span>Food cooking bloger</span>
                     <p>
                        Hi,I'm Sonia. Cooking is the way I express my creative
                        side to the world. Welcome to my Kitchen Corner on…
                     </p>
                     <a href="#">Continue Reading</a>
                  </div>
                  <div className="title">
                     <h3>About Autor</h3>
                  </div>

                  <div className="card-content">
                     <img src={asideImage} alt="" />
                     <strong>Kate Willems</strong>
                     <span>Food cooking bloger</span>
                     <p>
                        Hi,I'm Sonia. Cooking is the way I express my creative
                        side to the world. Welcome to my Kitchen Corner on…
                     </p>
                     <a href="#">Continue Reading</a>
                  </div>
                  <div className="title">
                     <h3>About Autor</h3>
                  </div>

                  <div className="card-content">
                     <img src={asideImage} alt="" />
                     <strong>Kate Willems</strong>
                     <span>Food cooking bloger</span>
                     <p>
                        Hi,I'm Sonia. Cooking is the way I express my creative
                        side to the world. Welcome to my Kitchen Corner on…
                     </p>
                     <a href="#">Continue Reading</a>
                  </div>
               </div>
            </SideBar>
         </Feed>
      </>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   const { data } = await api.get<Post[]>('posts');

   return {
      props: {
         posts: data,
      },
   };
};
export default pages;
