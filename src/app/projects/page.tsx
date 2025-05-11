import Link from 'next/link';

// Define your projects here or import from a separate data file
const projects = [
  {
    slug: 'toll-pass-database',
    title: 'Toll Pass Database',
    description: 'A frontend interface for managing toll pass information stored in a mySQL database. ',
    image: '/images/toll_database.png',
  },
  {
    slug: 'focus-app',
    title: 'FlowForge Focus App',
    description: 'A mobile app with two modes one that helps users focus by blocking distracting apps and one that motivates the user to work.',
    image: '/images/focus_app.jpg',
  },
  {
    slug: 'pacman-maze-search',
    title: 'Pacman Maze Search',
    description: 'A Pacman game that uses different algorithms to find a path to a goal.',
    image: '/images/pacman.png',
  },
  {
    slug: 'embedded-cross-walk',
    title: 'Embedded Systems Cross Walk System',
    description: 'A crosswalk system that uses an Arty A7 board to detect button and control traffic lights using a finite state machine, interrupts, and timers.',
    image: '/images/arty_a7.png',
  },
  {
    slug: 'verilog-microcontroller',
    title: 'Simple Verilog Microcontroller',
    description: 'A simple 16-bit microcontroller designed, synthesized, and simulateed in Verilog that can perform a basic instruction set.',
    image: '/images/verilog_microprocessor.png',
  },
  {
    slug: 'pacman-game',
    title: 'Pacman Game',
    description: 'Functional Pacman game built using different programming paradigms and languages.',
    image: '/images/pacman_game.png',
  },
  {
    slug: 'bridge-crossing',
    title: 'Bridge Crossing Problem',
    description: 'A operating system simulation of a bridge crossing using semaphores, mutexes, and threads',
    image: '/images/bridge_crossing.jpg',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen py-12 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map(({ slug, title, description, image }) => (
          <Link
            key={slug}
            href={`/projects/${slug}`}
            className="block bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {image && (
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={image}
                  alt={`${title} screenshot`}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
