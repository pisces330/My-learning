const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      //이미지에서 특정 영역을 지정하여 주요 콘텐츠를 나타낼 수 있는 기능
      options: {
        hotspot: true,
      },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    { name: "url", title: "URL", type: "url" },
    {
      name: "content",
      title: "Content",
      type: "array",
      /* Sanity에서 제공하는 텍스트 형식 ex) 제목, 본문, 목록 ...등
      "content" 필드가 "block" 타입의 데이터 배열을 포함한다.
      */
      of: [{ type: "block" }],
    },
  ],
};

export default project;
