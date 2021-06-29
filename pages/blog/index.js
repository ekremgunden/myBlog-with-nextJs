export default function Index(data) {
  const blogdata = data.data
  return (
    
    <div className="site-container mt-6 flex flex-wrap justify-start items-start">
      {blogdata.map((item) =>{
        return(
            <div key={item.id} className="bg-red-200 w-80 h-64 rounded-md px-6 py-4 my-5 mx-6 shadow-lg flex flex-col justify-between hover:bg-red-300 duration-300">
              <div>
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="border-t-2 border-black flex mt-auto">
                <p>Date: {item.publishedAt}</p>
              </div>
            </div>
        )
      })}
      
    </div>
)
}

export async function getStaticProps() {
  const res = await fetch('https://dry-gorge-83146.herokuapp.com/users')
  const data = await res.json()

  return {
    props: {
      data
    },
    revalidate: 60,
    
  }
}
