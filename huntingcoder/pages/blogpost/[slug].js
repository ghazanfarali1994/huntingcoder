import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css'
import * as fs from 'node:fs';


// Step 1: Find the fils corresponding to the slug

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  
    
  return (
    <div className={styles.main}>
    <main className={styles.blogitem}>
      <h1 className={styles.blogItemh1}>{blog && blog.title}</h1> 
      <hr />
      <div className={styles.blogItemp}>
        {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}/>}
      </div>
      </main>
    </div>
  )
}


export async function getStaticPaths() {
  return {
    paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
  ],
    fallback: false, // can also be true or 'blocking'
  };
}


export async function getStaticProps(context) {
    const {slug} = context.params;
    
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
  
  return {
    props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  };
}

export default Slug