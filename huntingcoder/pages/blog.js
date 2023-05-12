import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

// Step 1: Collect all the files from the blogdata directory
// Step 2: Iterate through them and display them
const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
    
  //   }, [])
 
  
  return (
    <div className="">
    <main className={styles.main}>
    {blogs.map((blogitem)=>{
      return <div key={blogitem.slug} className={styles.blogitem}>
          <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
          </Link>
            <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}</p>
          </div>
    })}

          </main>
        </div>
  )
}

export async function getServerSideProps(context) {
  console.log("Use Effect is running")
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()
    
  return {
    props: {allBlogs}, // will be passed to the page component as props
  };
}

export default Blog