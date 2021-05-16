$(function() {
    $('#pagepiling').pagepiling({
        menu: '#nav',
        sectionSelector: '.section',
        sectionsColor: ['#fff', '#eee', '#ddd'],
        anchors: ['page1', 'page2', 'page3'],
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['page1', 'page2', 'page3']
        },
    });
});