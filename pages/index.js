import fs from 'fs'
import path from 'path'
import Head from 'next/head'

export async function getStaticProps() {
  const apiDirectory = path.join(process.cwd(), '/pages/api')
  const filenames = fs.readdirSync(apiDirectory)

  const endpoints = filenames.map(filename =>
    filename.replace(/\.js$/, '')
  )

  const responses = []

  for (let endpoint of endpoints) {
    const res = await fetch(`http://localhost:3000/api/${endpoint}`)
    const greeting = await res.json()

    responses.push(greeting)
  }

  return {
    props: {
      responses
    }
  }
}

export default function Home({ responses }) {
  return (
    <div>
      <Head>
        <title>Greetings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='title'>
	  Greetings!
	</h1>
	
	<ul>
	  {responses.map(res => (
	    <li key={res.id}>
	      {res.greeting} | Language: <span className='lang'>{res.lang}</span> 
	    </li>
	  ))}
	</ul>
      </main>
      <style jsx>{`
	main {
	  font-family: Arial, Helvetica, sans-serif;
	}

	li {
	  padding: 10px
	}
	
	.title {
	  text-align: center;
	}

	.lang {
	  color: rgb(50, 115, 220);
	}
	  `}
      </style>
    </div>
  )
}
