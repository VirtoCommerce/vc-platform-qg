const I = actor();

module.exports = {
    inset: '//ul[@id="accessibleNav"]/li/a[text()="Blog"]',
    first: '//*[@id="Electronic news"]/main/div/div/div/div/h2[1]/a',
    firstPreview: '//*[@id="Electronic news"]/main/div/div/div/div/div[1]',
    backToList: '//main/nav/a[2]',
    second: '//*[@id="Electronic news"]/main/div/div/div/div/h2[2]/a',
    secondPreview: '//*[@id="Electronic news"]/main/div/div/div/div/div[2]',
    blogFullText: '//main/div/div/div/div/div[@class="rte"]',
    assert: require('assert'),
    reading: async function (blog, preview) {
        var blogPreview = await I.grabTextFrom(preview);
        I.click(blog);

        var fullText = await I.grabTextFrom(this.blogFullText);
        this.assert.ok(fullText.indexOf(blogPreview) > -1);
    }
};