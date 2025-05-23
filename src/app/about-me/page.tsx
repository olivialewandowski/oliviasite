import Navbar from '@/components/Navbar'

export default function AboutMe() {
  return (
    <main>
      <Navbar />
      <div className="container content">
        <div className="about-me-content">
          <p className="title">hi, i'm olivia!</p>
          <p className="text">a little bit about me: originally from san diego, i moved to new york city four years ago after being recruited to play volleyball for NYU's varsity team. now, i am recently graduated with a joint degree in computer science and data science, and actively experiencing the city as it stands.</p>
          <p className="text">my endeavors: first and foremost, i do data engineering for a climate tech company in brooklyn. then, i am currently developing an application that dissolves the traditionally slow and siloed nature of research operations within academia. also, i am developing state of the art ai governance and compliance frameworks for startups in new york city.</p>
          <p className="text">my interests: i'm an art lover, as you can probably tell by the piet mondrian inspired homepage. i enjoy writing fiction and political philosophy. i play virtually every sport that involves a court - volleyball, tennis, basketball. principally, i love to create, if it be through software development or traditional artistry.</p>
          <p className="text">and statement: in a rapidly evolving technological world, we now more than ever have the ability to make widespread societal change - political, social, economic - at unprecedented rates. my passions lie in leveraging technology to do so, particularly in addressing socioeconomic issues, also while ensuring that the technology itself doesn't perpetuate systemic inequalities present in our data. </p>
        </div>
      </div>
    </main>
  )
}