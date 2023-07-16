import { fetchAllPostsSlugs, fetchPost } from '@/src/api/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import styles from './Blog.module.css';

function index({ post }: { post:  Record<string, any> }): ReactElement {
  const {content: {title, content}, created_at, published_at} = post
  return (
    <div className={styles.blog}>
        <h2>{title}</h2>
        <span>Published at: {published_at?.split('T')[0] || created_at.split('T')[0]}</span>
        <p>
          {content}
        </p>
    </div>
  )
}

export const getStaticProps = async({ params }: { params:  Record<string, any> }) => {
  const {slug} = params
  const data = await fetchPost(slug)

  return {
    props: {
      post: data?.story
    }
  }
};

export const getStaticPaths = async () => {
  const data = await fetchAllPostsSlugs(10, 1);
  return {
    paths: data,
    fallback: false
  }
}


export default index