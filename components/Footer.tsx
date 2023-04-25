import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function Footer() {
  const reviewCountLink = 'https://hits.sh/youngme92.vercel.app/'
  const reviewCountImage =
    'https://hits.sh/youngme92.vercel.app.svg?view=today-total&label=today%20%2F%20total&color=1cbca5'
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 space-x-4">
          {/* <Link href={reviewCountLink}>
            <Image width={100} height={100} alt="Hits" src={reviewCountImage} />
          </Link> */}
          <a href="https://hits.sh/youngme92.vercel.app/">
            <img
              alt="Hits"
              src="https://hits.sh/youngme92.vercel.app.svg?view=today-total&label=today%20%2F%20total&color=1cbca5"
            />
          </a>
        </div>
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {/* <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link> */}
        </div>
      </div>
      {siteMetadata.views && (
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
      )}
    </footer>
  )
}
