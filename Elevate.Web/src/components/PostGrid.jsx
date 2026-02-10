import React from 'react';
import PostCard from './PostCard';

const PAGE_SIZE = 20; // 4x5 슬롯 유지

const PostGrid = ({ posts = [] }) => {
  if (!posts.length) {
    return <div className="text-center text-slate-500 py-12">게시물이 없습니다.</div>;
  }

  const placeholdersCount = Math.max(0, PAGE_SIZE - posts.length);

  return (
    <div className="grid w-full mx-auto gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch auto-rows-fr xl:max-w-[1600px] 2xl:max-w-[1760px]">
      {posts.map((p) => (
        <div key={p.id || p.slug} className="h-full">
          <PostCard post={p} />
        </div>
      ))}
      {Array.from({ length: placeholdersCount }).map((_, idx) => (
        <div
          key={`placeholder-${idx}`}
          className="h-full invisible pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-full min-h-[360px]" />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
