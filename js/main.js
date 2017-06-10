$('#search').hideseek({
    navigation: true,
    attribute: 'title',
    nodata: 'No images found'
});

$('.list').magnificPopup({
	delegate: 'div a',
	type: 'image',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	}
});
