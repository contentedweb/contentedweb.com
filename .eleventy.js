const { DateTime } = require('luxon')
const sanitizeHTML = require('sanitize-html')
const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
var moment = require('moment-timezone');

module.exports = function(eleventyConfig) {
  // The following copies to `_site/img`
  eleventyConfig.addPassthroughCopy(
    "src/assets",   
    "**/*.htaccess");

  eleventyConfig.setDataDeepMerge(true);

/*  
  // Get only content that matches a tag
  eleventyConfig.addCollection("photos", function(collectionApi) {
    return collectionApi.getFilteredByTag("photos");
  });
*/

  /* --- PLUGINS --- */
  // navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  /* define excerpt from main content (anything before --- in markdown file) */
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true
  });

  /* Convert Markdown in excerpt to HTML. See here: https://github.com/11ty/eleventy/issues/1380 */
  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ html: true }).render(content);
  });
  
  eleventyConfig.addFilter("dateFormatShort", function(dateIn) {
    return moment(dateIn).format('DD MMMM, YYYY');
  });

  eleventyConfig.addFilter("dateFormatMachine", function(dateIn) {
    return moment(dateIn).format('YYYY-MM-DD hh:mm:ss');
  });

  eleventyConfig.addFilter('dateFromTimestamp', (timestamp) => {
    return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate()
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
  })

  eleventyConfig.addFilter(
    'readableDate',
    (dateObj, format = 'dd LLL yyyy') => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format)
    }
  )

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })

  // WEBMENTIONS FILTER
  eleventyConfig.addFilter('webmentionsForUrl', (webmentions, url) => {
    // define which types of webmentions should be included per URL.
    // possible values listed here:
    // https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page
    const allowedTypes = ['mention-of', 'in-reply-to', 'like-of', 'repost-of']

    // define which HTML tags you want to allow in the webmention body content
    // https://github.com/apostrophecms/sanitize-html#what-are-the-default-options
    const allowedHTML = {
      allowedTags: ['b', 'i', 'em', 'strong', 'a'],
      allowedAttributes: {
        a: ['href']
      }
    }

    // clean webmention content for output
    const clean = (entry) => {
/*
      const { html, text } = entry.content

      if (html) {
        // really long html mentions, usually newsletters or compilations
        entry.content.value =
          html.length > 2000
            ? `mentioned this in <a href="${entry['wm-source']}">${entry['wm-source']}</a>`
            : sanitizeHTML(html, allowedHTML)
      } else {
        entry.content.value = sanitizeHTML(text, allowedHTML)
      }
*/
      return entry
    }

    // sort webmentions by published timestamp chronologically.
    // swap a.published and b.published to reverse order.
    const orderByDate = (a, b) => new Date(b.published) - new Date(a.published)

    // only allow webmentions that have an author name and a timestamp
    const checkRequiredFields = (entry) => {
      const { author, published } = entry
      return !!author && !!author.name && !!published
    }

    // run all of the above for each webmention that targets the current URL
    return webmentions
      .filter((entry) => entry['wm-target'] === url)
      .filter((entry) => allowedTypes.includes(entry['wm-property']))
      .sort(orderByDate)
      .map(clean)

      //.filter(checkRequiredFields)
    })

  // 11ty defaults
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "liquid", "njk","md","htaccess"],
    dir: {
      input: 'src'
    }

  };
};