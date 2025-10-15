const apps = [
  { name: 'ChatGPT', url: 'https://chatgpt.com/?openaicom_referred=true', img: '/Images/chatgpt.webp' },
  { name: 'ASC Int', url: 'https://asc.iitb.ac.in/acadmenu/', img: '/Images/ascin.jpg' },
  { name: 'ASC Ext', url: 'https://portal.iitb.ac.in/asc/Login', img: '/Images/ascext.jpg' },
  { name: 'Moodle', url: 'https://moodle.iitb.ac.in/my/courses.php', img: '/Images/moodle.jpg' },
  { name: 'Resobin', url: 'https://resobin.gymkhana.iitb.ac.in/', img: '/Images/resobin.jpg' },
  { name: 'Webmail', url: 'https://webmail.iitb.ac.in/', img: '/Images/webmail.jpg' },
  { name: 'Maths', url: 'https://www.math.iitb.ac.in/~krishnan/ma105-2025/', img: '/Images/maths1.jpg' },
]

export default function Hero() {
  return (
    <div className="w-full min-h-[40vh] grid grid-cols-1 lg:grid-cols-7 grid-rows-1 lg:grid-rows-2 border-b-4 border-blue-900 bg-gradient-to-b from-cyan-100/20 to-transparent backdrop-blur-sm">
      {/* Apps Section */}
      <div className="lg:col-span-5 lg:row-span-2 flex flex-wrap justify-center items-center gap-2 md:gap-3 p-3 md:p-4">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:rotate-1 active:scale-95"
          >
            <img
              src={app.img}
              alt={app.name}
              className="h-16 w-32 sm:h-20 sm:w-36 md:h-24 md:w-44 rounded-xl md:rounded-2xl object-cover shadow-lg hover:shadow-2xl border-2 border-white/30 hover:border-white/50"
            />
          </a>
        ))}
      </div>

      {/* 3D Spline Robot */}
      <div className="lg:col-span-2 lg:row-span-2 hidden lg:block relative overflow-hidden">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-45i739Lm8APvQcsIC9RGkRyv/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="rounded-lg"
          title="3D Robot"
        />
      </div>
    </div>
  )
}
