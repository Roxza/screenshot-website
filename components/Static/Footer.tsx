export default function Footer() {
   return (
      <div className="w-full flex items-center justify-between mt-[200px]">
         <h1 className="font-light text-white">
            Designed with <i className="fal fa-heart mx-1 text-pink-400" /> by Roxza
         </h1>
         <a target="_blank" href="https://github.com/Roxza/screenshot-website">
            <h1 className="font-light text-white hover:text-blue-400 transition-all cursor-pointer">This is an open source project.</h1>
         </a>
      </div>
   );
}
