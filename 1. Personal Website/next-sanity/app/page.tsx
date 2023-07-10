import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="mx-auto max-w-5xl py-20">
      <h1 className="font-extrabold text-7xl">
        Hello I&apos;m{" "}
        <span
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
        bg-clip-text text-transparent"
        >
          JeongHwan
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">Hej! Welcome to my portfolio</p>

      <h2 className="mt-24 font-bold text-3xl text-gray-700">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
