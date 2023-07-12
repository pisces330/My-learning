import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const projectDetail = await getPage(params.slug);

  return (
    <>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
        {projectDetail.title}
      </h1>
      <div className="text-lg text-gray-600 mt-10">
        <PortableText value={projectDetail.content} />
      </div>
    </>
  );
}
