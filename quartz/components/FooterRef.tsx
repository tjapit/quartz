import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"
import { getRefNavs } from "../util/refNav"
import styleFooterRef from "./styles/footerRef.scss"
import styleUtil from "./styles/util.scss"
// @ts-ignore
import scripts from "./scripts/footerRef.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"


const NOTE_REFS = {
  next: {
    id: "next",
    title: "Next ▶",
    classNames: ["next", "text-right"],
  },
  prev: {
    id: "prev",
    title: "◀ Prev",
    classNames: ["text-left"],
  },
  ref: {
    id: "ref",
    title: "※ References",
    classNames: [],
  },
  source: {
    id: "source",
    title: "⃝ Source",
    classNames: ["source"],
  },
}

// source: https://www.youtube.com/watch?v=6M9aZzm-kEc
export type RefType = keyof typeof NOTE_REFS
type Link = {
  alias?: string;
  href?: string;
  external: boolean
}
type RefNavProps = {
  refType: RefType
} & QuartzComponentProps


const RefNav = ({ refType, fileData, allFiles, displayClass }: RefNavProps) => {
  const refNavs = getRefNavs(refType, fileData, allFiles)
  if (refNavs.length === 0) return null

  const refClassNames = NOTE_REFS[refType].classNames
  const links: Link[] = refNavs.map((refNav) =>
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
    <li className="truncate">
      {
        link.href ? <a
          href={link.href}
          class={link.external ? "external" : "internal"}
          target={link.external ? "_blank" : "_self"}
          rel={link.external ? "noopener" : ""}
        >
          {link.alias}
        </a> :
          link.alias
      }
    </li>
  ))

  return refType !== NOTE_REFS.ref.id ? (
    <div
      class={classNames(displayClass, "ref-nav", ...refClassNames)}
      data-default-link={links[0].href}
    >
      <p class="title font-bold">{NOTE_REFS[refType].title}</p>
      {refType === NOTE_REFS.source.id ? linkObjects[0] : linkObjects}
    </div>
  ) : (
    <div className="references">
      <h2>{NOTE_REFS[refType].title}</h2>
      {linkObjects}
    </div>
  )
}

export default (() => {
  const FooterRef: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class={classNames(props.displayClass, "footer-ref")}>
        <div className="source-ref">
          <RefNav refType="source" {...props} />
        </div>
        <nav>
          <RefNav refType="prev" {...props} />
          <RefNav refType="next" {...props} />
        </nav>
        <RefNav refType="ref" {...props} />
      </div>
    )
  }

  FooterRef.css = [styleFooterRef, styleUtil]
  FooterRef.afterDOMLoaded = scripts

  return FooterRef
}) satisfies QuartzComponentConstructor
