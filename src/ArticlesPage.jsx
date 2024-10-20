import axios from 'axios'
import { useEffect, useState } from 'react'

export function ArticlesPage () { 
  const [ articles, setArticles] = useState([]);

  const handleSubmit = () => { 
    event.preventDefault(); 
    axios.get('http://localhost:3000/news').then((response) => { 
      console.log(response.data);
      setArticles(response.data.articles);
    })
  }

  useEffect(handleSubmit, [])

  return ( 
    <div>
      <h1>Articles</h1>
      <button>Search</button>
      {articles.map((article) => (
      <div>
        <h1>{article.title}</h1>
        <p>{article.author}</p>
        <p>{article.description}</p>
        <p>{article.url}</p>
      </div>
      ))}
    </div>
  )
}