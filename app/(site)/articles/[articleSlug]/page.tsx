import Link from "next/link";
import React from "react";

export default async function page({ params }:any) {
  const { articleSlug } = params; // دسترسی به پارامتر slug

  const res = await fetch(
    `http://91.107.138.134:80/api/article/detail/${articleSlug}/`,
    { cache: "no-store" }
  );
  const data = await res.json();

  const resArticles = await fetch(
    "http://91.107.138.134:80/api/article/list/",
    { cache: "no-store" }
  );
  const articles = await resArticles.json();
  const sortedArticles = articles.sort((a:any, b:any) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
  const latestFiveArticles = sortedArticles.slice(0, 5);

  const currentArticleTags = data.tag.map((t:any) => t.tag);

  const relatedArticles = articles.filter((article: any) => {
    return (
      article.id !== data.id &&
      article.tag.some((tagObj: any) => currentArticleTags.includes(tagObj.tag))
    );
  });
  return (
    <div className="mt-16">
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="rounded-md p-3 flex items-center gap-2 bg-second_dark text-badge w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-xs">مقالات</span>
          </div>
          <div className="grid grid-cols-7 gap-6">
            <div className="col-span-7 lg:col-span-5 p-6 bg-main_dark rounded-xl flex flex-col gap-8">
              <h1 className="text-lg font-bold">{data.title}</h1>
              <div className="flex items-center gap-8">
                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span>{data.user}</span>
                </div>
                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>زمان مطالعه: 4 دقیقه</span>
                </div>
                <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <span>
                    {new Date(data.created_at).toLocaleDateString("fa-IR")}
                  </span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* <Image
                  src={"/articles/3.png"}
                  alt=""
                  width={1000}
                  height={1000}
                /> */}
                <img src={`http://91.107.138.134:80${data.image}`} alt="" />
              </div>
              <div
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></div>
              <div className="bg-background rounded-lg p-4 flex items-center justify-between">
                <h5>چه امتیازی رو برای این مقاله در نظر داری؟</h5>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <h6>برچسب ها :</h6>
                {data.tag?.map((item: any) => (
                  <div key={item.tag} className="rounded-md p-2 px-3 text-sm flex items-center text-white bg-background w-fit min-w-16 justify-center">
                    {item.tag}
                  </div>
                ))}
              </div>
              <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span>تاریخ بروز رسانی :</span>
                <span>
                  {new Date(data.updated_at).toLocaleDateString("fa-IR")}
                </span>
              </div>
            </div>
            <div className="col-span-2 p-4 bg-main_dark rounded-xl flex-col gap-6 h-fit sticky top-2 hidden lg:flex">
              <h1 className="font-bold bg-background p-4 rounded-lg flex items-center justify-center">
                تازه های روز
              </h1>
              <div className="flex flex-col gap-4">
                {latestFiveArticles?.map((item: any) => (
                  <Link
                    href={`${item.id}`}
                    key={item.id}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={`http://91.107.138.134:80${item.image}`}
                      alt=""
                      width={1000}
                      height={1000}
                      className="w-28 shrink-0 rounded overflow-hidden"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-sm line-clamp-1">{item.title}</h3>
                      <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                          />
                        </svg>
                        <span>
                          {new Date(data.created_at).toLocaleDateString(
                            "fa-IR"
                          )}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <h1 className="text-lg font-bold">مقالات مرتبط</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {relatedArticles?.map((item: any) => (
                <div key={item.id} className="flex flex-col relative">
                  <div className="bg-background w-fit rounded-b-lg px-4 lg:px-6 py-2 lg:py-3 text-xs text-white absolute top-0 right-0 left-0 mx-auto">
                    8 تیر
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Link href={`${item.id}`}>
                      <img
                        src={`http://91.107.138.134:80${item.image}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="py-4 flex flex-col gap-1.5 lg:gap-3">
                    <h1 className="text-sm lg:text-lg font-bold">
                      <Link href={`${item.id}`}>{item.title}</Link>
                    </h1>
                    <div className="flex gap-1 items-center text-[10px] lg:text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <span>علیرضا رضایی</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }:any) {
  const { articleSlug } = params;

  const res = await fetch(
    `http://91.107.138.134:80/api/article/detail/${articleSlug}/`,
    { cache: "no-store" }
  );

  const data = await res.json();

  // بررسی موفقیت درخواست
  if (!res.ok) {
    return {
      title: "Article Not Found",
      description: "The requested article was not found.",
    };
  }

  return {
    title: data.meta_title || "مقاله طراحی سایت",
    description: data.meta_description || "مقاله طراحی سایت",
    keywords: data.key_word,
    // openGraph: {
    //   title: data.title,
    //   description: data.description,
    //   url: `https://yourwebsite.com/article/${articleSlug}`,
    //   images: [
    //     {
    //       url: data.image || 'https://yourwebsite.com/default-image.jpg',
    //       width: 800,
    //       height: 600,
    //       alt: data.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: data.title,
    //   description: data.description,
    //   images: [data.image || 'https://yourwebsite.com/default-image.jpg'],
    // },
  };
}
