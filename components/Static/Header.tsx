export default function Header() {
   return (
      <div className="w-full flex items-center justify-between">
         <div className="flex items-center space-x-3">
            <i className="text-blue-400 fa-brands fa-artstation fa-2x" />

            <h1 className="font-semibold text-2xl text-white">Online Website Screenshot</h1>
         </div>
         <div className="space-x-4">
            <a target="_blank" href="https://api.roxza.me">
               <i className="fa-solid fa-book fa-2x text-blue-400 hover:text-white transition-all" />
            </a>
            <a target="_blank" href="https://github.com/Roxza/screenshot-website">
               <i className="fab fa-github fa-2x text-blue-400 hover:text-white transition-all" />
            </a>
            <a target="_blank" href="https://www.npmjs.com/package/webscreen">
               <i className="fab fa-npm fa-2x text-blue-400 hover:text-white transition-all" />
            </a>
         </div>
      </div>
   );
}
