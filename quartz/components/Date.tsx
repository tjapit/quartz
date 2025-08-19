import { GlobalConfiguration } from "../cfg"
import { ValidLocale } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: Date
  locale?: ValidLocale
  datetype: ValidDateType
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData, datetype?: ValidDateType): Date | undefined {
  if (datetype) {
    return data.dates?.[datetype]
  }

  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }
  return data.dates?.[cfg.defaultDateType]
}

export function formatDate(d: Date, locale: ValidLocale = "en-GB"): string {
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function Date({ date, locale, datetype }: Props) {
  return (
    <time datetime={date.toISOString()}>
      {
        datetype && `${datetype.charAt(0).toLocaleUpperCase() + datetype.substring(1)} `
      }
      {formatDate(date, locale)}
    </time>
  )
}
