import { getEntry } from 'astro:content';
import { getRelativeLocaleUrlList } from 'astro:i18n';
import { I18N, SITE } from 'astrowind:config';

export const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(I18N?.language, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export const getFormattedDate = (date: Date): string => (date ? formatter.format(date) : '');

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

// Function to format a number in thousands (K) or millions (M) format depending on its value
export const toUiAmount = (amount: number) => {
  if (!amount) return 0;

  let value: string;

  if (amount >= 1000000000) {
    const formattedNumber = (amount / 1000000000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + 'B';
    } else {
      value = formattedNumber + 'B';
    }
  } else if (amount >= 1000000) {
    const formattedNumber = (amount / 1000000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + 'M';
    } else {
      value = formattedNumber + 'M';
    }
  } else if (amount >= 1000) {
    const formattedNumber = (amount / 1000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + 'K';
    } else {
      value = formattedNumber + 'K';
    }
  } else {
    value = Number(amount).toFixed(0);
  }

  return value;
};

export const getLocalePathname = (locale) => {
  const relativeLocaleList = getRelativeLocaleUrlList() || [];
  return relativeLocaleList.some(l => l.includes(locale)) ? locale : undefined;
};

export const getCurrentPath = (url) =>
  `/${trim(trim(new URL(url).pathname, '/'))}`;

export const getSiteInfo = (locale: string) => {
  const { i18n, ...info } = SITE;

  return { ...info, ...(i18n[locale] || {}) };
};

export const fetchPageContent = async (page: string, locale: string) => {
  const relativeLocaleList = getRelativeLocaleUrlList() || [];
  const contentLocale = relativeLocaleList.some(l => l.includes(locale)) ? `${locale}/` : '';
    
  const pageContentLocale = await getEntry('page', contentLocale + page);

  return pageContentLocale?.data || {};
};

export const getPageData = async (currentLocale, pageName, url) => {
  const currentPath = getCurrentPath(url);
  const siteInfo = getSiteInfo(currentLocale);
  const { i18n: pageI18n, ...prePageContent } = await fetchPageContent(pageName, currentLocale);
  const pageContent = { site: siteInfo, ...prePageContent };
  const languageSwitcherData = I18N?.locales?.map((locale) => {
    if (locale !== currentLocale) {
      return {
        label: I18N?.labels.find(l => l[locale])[locale],
        url: pageI18n[locale]?.url || currentPath,
      };
    }
  }).filter(Boolean);

  const metadata = {
      ...pageContent?.metadata,
      title: pageContent?.metadata?.title || siteInfo?.tagLine,
  };

  const layoutProps = {
      currentPath,
      languageSwitcherData,
      metadata,
      site: siteInfo,
  };

  const pageProps = {
      currentPath,
      metadata,
      pageContent,
      currentLocale,
      languageSwitcherData,
      pageName,
  };

  return { layoutProps, pageProps };
};
