import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="relative min-h-screen font-sans selection:bg-ms-blue/20 selection:text-ms-blue">
            <Helmet>
                <title>Blog | Microsoft Elevate</title>
                <meta name="description" content="Microsoft Elevate 블로그. 교육 현장의 AI 활용 사례와 인사이트를 공유합니다." />
                <meta property="og:title" content="Blog | Microsoft Elevate" />
                <meta property="og:description" content="Microsoft Elevate 블로그. 교육 현장의 AI 활용 사례와 인사이트를 공유합니다." />
            </Helmet>

            {/* Background Blobs */}
            <div className="pastel-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            {/* Blog Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
                <div className="text-center max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        블로그
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        블로그 카테고리가 곧 제공됩니다.
                    </p>
                </div>
            </div>

            {/* Outlet for nested routes */}
            <Outlet />
        </div>
    );
};

export default Blog;
