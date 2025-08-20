import { Data } from "vfile";
import { RefType } from "../components/FooterRef";

export function getRefNavs(refType: RefType, fileData: Data, allFiles: Data[]): Data[] {
  const frontmatter = fileData.frontmatter
  if (!frontmatter) return []

  const footerRefs = frontmatter[refType]
  if (!footerRefs || footerRefs.length < 0) return []

  return footerRefs.map(footerRef => {
    const refFile = allFiles.find(f => footerRef.includes(f.frontmatter?.id!))
    if (!refFile) return footerRef
    return refFile
  })
    .filter(f => {
      if (typeof f === "string") return f !== "[[]]"
      return true
    })
    // map strings
    .map(f => {
      if (typeof f !== "string") return f

      const externalRef = extractLink(f)
      if (!externalRef) {
        return {
          externalRef: {
            alias: f
          }
        }
      }

      return { externalRef }
    })
}

function extractLink(link: string): { alias: string, href: string } | undefined {
  const aliasStart = link.indexOf("[") + 1
  const aliasEnd = link.lastIndexOf("]")
  const hrefStart = link.lastIndexOf("(") + 1
  const hrefEnd = link.lastIndexOf(")")

  const alias = link.substring(aliasStart, aliasEnd)
  const href = link.substring(hrefStart, hrefEnd)

  if (!href.startsWith("http")) return undefined

  return { alias, href }
}

declare module "vfile" {
  interface DataMap {
    externalRef: Partial<{
      alias: string
      href: string
    }>
  }
}
