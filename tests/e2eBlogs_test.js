/// <reference path="../steps.d.ts" />

Feature('Blogs');

Scenario('[Positive] Reading news', async (I, blogs) => {
    I.amOnPage('');

    I.waitForElement(blogs.inset, 10);
    I.click(blogs.inset);
    
    await blogs.reading(blogs.first, blogs.firstPreview);
    I.click(blogs.backToList);
    await blogs.reading(blogs.second, blogs.secondPreview);
});