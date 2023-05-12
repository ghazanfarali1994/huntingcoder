import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css'

// Step 1: Find the fils corresponding to the slug

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  
    
  return (
    <div className={styles.main}>
    <main className={styles.blogitem}>
      <h1 className={styles.blogItemh1}>{blog && blog.title}</h1> 
      <hr />
      <div className={styles.blogItemp}>
        {blog && blog.content}
      </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  // const router = useRouter();
  //   if (!router.isReady) return;
    const {slug} = context.query;
    
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    
  
  return {
    props: {myBlog}, // will be passed to the page component as props
  };
}

export default slug