const I = actor();

module.exports = {
    inset: '//ul[@id="accessibleNav"]/li/a[text()="Blog"]',
    first: '//h1[text()="Electronic news"]/../h2[1]/a',
    firstPreview: '//h1[text()="Electronic news"]/../div[1]/p',
    backToList: '//main/nav/a[2]',
    second: '//h1[text()="Electronic news"]/../h2[2]/a',
    secondPreview: '//h1[text()="Electronic news"]/../div[2]/p',
    blogFullText: '//main/div/div/div/div/div[@class="rte"]',
    assert: require('assert'),
    reading: async function (blog, preview) {
        var blogPreview = await I.grabTextFrom(preview);
        blogPreview = blogPreview.slice(0, -3);
        I.click(blog);

        var fullText = await I.grabTextFrom(this.blogFullText);        
        fullText = fullText.replace(/\n|\r/g," ");
        this.assert.ok(fullText.indexOf(blogPreview) > -1);
    }
};