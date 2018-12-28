const I = actor();

module.exports = {
    title: '#page-content > h1',
    authors: '.author-content > .list.list-contributors',
    topics: '#topics > h2:nth-of-type(1)',
    recentChanges: '#topics > h2:nth-of-type(2)',
    menu: {
        folder2: '#menu > .menu.items-tree > .menu-item:nth-of-type(2) > a[href="docs/vc2devguide"].menu-link',
        folder3: '#menu > .menu.items-tree > .menu-item:nth-of-type(3) > a[href="docs/vc2devguide"].menu-link',
        folder4: '#menu > .menu.items-tree > .menu-item:nth-of-type(4) > a[href="docs/vc2devguide"].menu-link'
    }
};