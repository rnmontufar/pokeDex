import pokeDex from "../pokedex.png"; 

export function Navbar() {
  return (
    <div className="bg-gray-200 transform translate-x-10 translate-y-4 bg-gradient-to-br from-blue-400 to-indigo-500">
      <div className="flex flex-wrap justify-center text-6xl">
        <span >PokeDex</span>
        <img src={pokeDex} alt='pokedex' className="w-21 h-14 m-2" />
      </div>
      <div className="flex flex-wrap justify-center text-xl">
        Kanto edition
      </div>
    </div>
  )
}
