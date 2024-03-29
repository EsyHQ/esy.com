import React from 'react';
import XLogo from 'src/svg/x-logo.svg';
import YTLogo from 'src/svg/yt-logo.svg';



const SocialIcon = ({ name }) => {
  switch (name) {
    case 'X':
      return <XLogo className="w-6 h-6" />;
    case 'YT':
      return <YTLogo className="w-6 h-6" />;
    default:
      return null;
  }
};

const recommendedTopics = [
  'AI',
  'Machine Learning',
  'Programming',
];

const socialLinks = [
  { name: 'X', icon: 'x', url: 'https://x.com/@esyjournal' },
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/esyjournal' },
  { name: 'Medium', icon: 'medium', url: 'https://medium.com/' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/' },
];


export default function Sidebar() {
  return (
    <div className="w-full max-w-xs space-y-8 shrink-0 md:top-20 md:sticky">
      <div className="rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="p-5 space-y-5">
          <h5 className="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-white">
            Recommended topics
          </h5>
          <div className="flex flex-wrap items-center gap-4">
            {recommendedTopics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-md dark:bg-blue-900 dark:text-blue-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="p-5 space-y-5">
          <h5 className="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-white">
            Follow us
          </h5>
          <ul className="flex space-x-4">
  <li>
    <a
      href="https://www.x.com/@esyjournal"
      target="_blank"
      title=""
      className="flex items-center gap-2.5 text-base font-semibold hover:underline text-gray-900 dark:text-white"
    >
      <SocialIcon name="X" />
    </a>
  </li>
  <li>
    <a
      href="https://www.youtube.com/@esyjournal"
      target="_blank"
      title=""
      className="flex items-center gap-2.5 text-base font-semibold hover:underline text-gray-900 dark:text-white"
    >
      <SocialIcon name="YT" />
    </a>
  </li>
</ul>
          </div>
      </div>
    </div>
  );
}