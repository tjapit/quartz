import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"
import { getRefNavs } from "../util/refNav"
import styleFooterRef from "./styles/footerRef.scss"
import styleUtil from "./styles/util.scss"
// @ts-ignore
import scripts from "./scripts/footerRef.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const VALID_NOTE_REF = {
  NEXT: "next",
  PREV: "prev",
  REF: "ref",
  SRC: "source",
} as const

// source: https://www.youtube.com/watch?v=6M9aZzm-kEc
export type RefType = (typeof VALID_NOTE_REF)[keyof typeof VALID_NOTE_REF]

interface RefNavProps extends QuartzComponentProps {
  refType: RefType
}

const RefNav = ({ refType, fileData, allFiles, displayClass }: RefNavProps) => {
  const refNavs = getRefNavs(refType, fileData, allFiles)
  if (refNavs.length === 0) return null

  const refClass =
    refType === "next" ? "next text-right" : refType === "prev" ? "prev text-left" : ""
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

  const linkObjects = links.map((link) => (
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
  ))

  return (
    <div class={classNames(displayClass, "ref-nav", refClass)} data-default-link={links[0].href}>
      <p class="title font-bold">{refType === "prev" ? "◀ Prev" : "Next ▶"}</p>
      {linkObjects}
    </div>
  )
}

export default (() => {
  const FooterRef: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class={classNames(props.displayClass, "footer-ref")}>
        <RefNav refType="prev" {...props} />
        <RefNav refType="next" {...props} />
      </div>
    )
  }

  FooterRef.css = [styleFooterRef, styleUtil]
  FooterRef.afterDOMLoaded = scripts

  return FooterRef
}) satisfies QuartzComponentConstructor
