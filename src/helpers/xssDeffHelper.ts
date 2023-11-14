export const xssDeffHelper = (content: string): string => {
  const lt = /</g,
    gt = />/g,
    ap = /'/g,
    ic = /"/g

  return content
    .toString()
    .replace(lt, '&lt;')
    .replace(gt, '&gt;')
    .replace(ap, '&#39;')
    .replace(ic, '&#34;')
}
