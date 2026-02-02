import { Helmet } from 'react-helmet-async';

const Teams = () => {
    return (
        <div className="relative min-h-screen font-sans selection:bg-ms-blue/20 selection:text-ms-blue">
            <Helmet>
                <title>Teams | Microsoft Elevate Blog</title>
                <meta name="description" content="Teams 관련 블로그 포스트입니다." />
                <meta property="og:title" content="Teams | Microsoft Elevate Blog" />
                <meta property="og:description" content="Teams 관련 블로그 포스트입니다." />
            </Helmet>

            {/* Background Blobs */}
            <div className="pastel-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            {/* Blog Teams Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
                <div className="text-center max-w-4xl">
                    <div className="clean-card rounded-[3rem] p-12 bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gradient mb-6 tracking-tight">
                            Teams
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Teams 관련 콘텐츠가 곧 제공됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
