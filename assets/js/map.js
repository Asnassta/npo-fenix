ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.789729,30.520102],
            zoom: 14,
            controls: ['zoomControl',  'typeSelector',  'fullscreenControl', 'routeButtonControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
 

        myPlacemark = new ymaps.Placemark([59.791129,30.554239], {
            hintContent: 'ООО «Научно-Производственное Объединение Феникс»',
            balloonContent: 'ООО «Научно-Производственное Объединение Феникс»'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/icons/map-marker.png',
            // Размеры метки.
            iconImageSize: [67, 67],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-34, -34]
        });

    myMap.geoObjects
        .add(myPlacemark)
});