import { RefType } from "./FooterRef"
import { QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import { getRefNavs } from "../util/refNav"

interface RefNavProps extends QuartzComponentProps {
  refType: RefType
}

const RefNav = ({ refType, fileData, allFiles, displayClass }: RefNavProps) => {
  const refNavs = getRefNavs(refType, fileData, allFiles)
  if (refNavs.length === 0) return null

  const classNext = refType === "next" ? "next text-right" : ""
  const links: { alias?: string; href?: string; external: boolean }[] = refNavs.map((refNav) =>
    refNav.externalRef
      ? {
        alias: refNav.externalRef.alias,
        href: refNav.externalRef.href,
        external: true,
      }
      : {
        alias: refNav.frontmatter?.title,
        href: resolveRelative(fileData.slug!, refNav.slug!),
        external: false,
      },
  )

  return (
    <div class={classNames(displayClass, "ref-nav", classNext)}>
      <div class="title font-bold">{refType === "prev" ? "◀ Prev" : "Next ▶"}</div>
      {links.map((link) => (
        <li>
          <a
            href={link.href}
            class="internal"
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener" : ""}
          >
            {link.alias}
          </a>
        </li>
      ))}
    </div>
  )
}

export default RefNav
