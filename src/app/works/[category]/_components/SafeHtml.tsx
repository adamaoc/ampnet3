import { sanitizeWorkHtml } from '@/lib/sanitize-work-html';

type SafeHtmlProps = {
  html: string;
  className?: string;
};

const SafeHtml = ({ html, className = '' }: SafeHtmlProps) => {
  const sanitizedHtml = sanitizeWorkHtml(html);

  return (
    <div
      className={`${className} [&>p]:mb-4 [&>p:last-child]:mb-0 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-8 [&>h1:first-child]:mt-0 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-6 [&>h2:first-child]:mt-0 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-3 [&>h3]:mt-5 [&>h3:first-child]:mt-0 [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mb-3 [&>h4]:mt-4 [&>h4:first-child]:mt-0 [&>h5]:text-base [&>h5]:font-semibold [&>h5]:mb-2 [&>h5]:mt-3 [&>h5:first-child]:mt-0 [&>h6]:text-sm [&>h6]:font-semibold [&>h6]:mb-2 [&>h6]:mt-3 [&>h6:first-child]:mt-0 [&>ul]:mb-4 [&>ul]:pl-6 [&>ul]:list-disc [&>ul:last-child]:mb-0 [&>ol]:mb-4 [&>ol]:pl-6 [&>ol:last-child]:mb-0 [&>li]:mb-1 [&>li:last-child]:mb-0 [&>blockquote]:border-l-4 [&>blockquote]:border-teal-500 [&>blockquote]:pl-4 [&>blockquote]:py-2 [&>blockquote]:mb-4 [&>blockquote]:italic [&>blockquote]:bg-slate-50 [&>blockquote]:dark:bg-slate-800 [&>blockquote]:rounded-r [&>blockquote]:last-child]:mb-0 [&>code]:bg-slate-100 [&>code]:dark:bg-slate-700 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>pre]:bg-slate-100 [&>pre]:dark:bg-slate-700 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:mb-4 [&>pre]:overflow-x-auto [&>pre:last-child]:mb-0 [&>a]:text-teal-600 [&>a]:dark:text-teal-400 [&>a]:underline [&>a]:hover:text-teal-700 [&>a]:dark:hover:text-teal-300`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default SafeHtml;
