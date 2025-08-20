import { classNames } from "../util/lang"
import RefNav from "./RefNav"
import styleFooterRef from "./styles/footerRef.scss"
import styleRefNav from "./styles/refNav.scss"
import styleUtil from "./styles/util.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const VALID_NOTE_REF = {
  NEXT: "next",
  PREV: "prev",
  REF: "ref",
  SRC: "source",
} as const

// source: https://www.youtube.com/watch?v=6M9aZzm-kEc
export type RefType = (typeof VALID_NOTE_REF)[keyof typeof VALID_NOTE_REF]

export default (() => {
  const FooterRef: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class={classNames(props.displayClass, "footer-ref")}>
        <RefNav refType="prev" {...props} />
        <RefNav refType="next" {...props} />
      </div>
    )
  }

  FooterRef.css = [styleFooterRef, styleUtil, styleRefNav]

  return FooterRef
}) satisfies QuartzComponentConstructor
